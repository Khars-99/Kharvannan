import { Handler } from '@netlify/functions';

export const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method Not Allowed' }) };
  }

  // Use the securely stored Netlify environment variable
  const apiKey = process.env.GEMINI_API_KEY || process.env.api_key;
  
  if (!apiKey) {
    console.error("Environment check:", Object.keys(process.env).filter(k => k.toLowerCase().includes('key')));
    return { 
      statusCode: 500, 
      body: JSON.stringify({
        error: 'GEMINI_API_KEY is missing. Netlify Troubleshooting: 1. Ensure the key name is exactly GEMINI_API_KEY. 2. Set "Scopes" to include "Functions". 3. Trigger a NEW DEPLOY after adding the variable.'
      })
    };
  }

  try {
    const { systemPrompt, userMessage } = JSON.parse(event.body || '{}');

    if (!systemPrompt || !userMessage) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Missing prompt parameters.' }) };
    }

    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash:generateContent?key=${apiKey}`;

    const geminiPayload = {
      systemInstruction: {
        parts: [{ text: systemPrompt }]
      },
      contents: [{
        parts: [{ text: userMessage }]
      }],
      generationConfig: {
        temperature: 0.7,
      }
    };

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(geminiPayload)
    });

    if (!response.ok) {
        const errorText = await response.text();
        let errorJson;
        try {
          errorJson = JSON.parse(errorText);
        } catch {
          errorJson = { error: { message: errorText } };
        }
        console.error("Gemini API Error:", errorJson);
        return {
           statusCode: response.status,
           body: JSON.stringify({
             error: errorJson.error?.message || "Failed to generate content from AI provider."
           })
        };
    }

    const data = await response.json();

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

  } catch (error: any) {
    console.error('Error handling request:', error);
    return { statusCode: 500, body: JSON.stringify({ error: 'Internal Server Error' }) };
  }
};

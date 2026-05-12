import { Handler } from '@netlify/functions';

export const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method Not Allowed' }) };
  }

  // Use the securely stored Netlify environment variable
  const apiKey = process.env.GEMINI_API_KEY;
  
  if (!apiKey) {
    return { 
      statusCode: 500, 
      body: JSON.stringify({ error: 'GEMINI_API_KEY is not configured on the server.' }) 
    };
  }

  try {
    const { systemPrompt, userMessage } = JSON.parse(event.body || '{}');

    if (!systemPrompt || !userMessage) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Missing prompt parameters.' }) };
    }

    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;

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
        console.error("Gemini API Error:", errorText);
        return {
           statusCode: response.status,
           body: JSON.stringify({ error: "Failed to generate content from AI provider." })
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

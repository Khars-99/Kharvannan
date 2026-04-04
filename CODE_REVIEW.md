# Code Review: Kharvannan - Professional Portfolio

This review provides a comprehensive analysis of the codebase, focusing on code quality, security, performance, and best practices.

## 1. Code Quality
### Findings
- **Use of `any` types**: `components/Crucible.tsx` and `components/First90.tsx` make extensive use of the `any` type (e.g., lines 135 and 141 in `Crucible.tsx`), which bypasses TypeScript's type-checking benefits.
- **Component Bloat**: Some components like `First90.tsx` and `Crucible.tsx` are quite large (500+ lines) and contain static data that could be moved to separate JSON or configuration files.
- **Naming Conventions**: Generally good and consistent (PascalCase for components, camelCase for variables).

### Suggestions
- **Define Interfaces**: Replace `any` with specific interfaces for `Case` and `VerdictData` to ensure type safety.
- **Data Decoupling**: Move the `CASES` array in `Crucible.tsx` and the sector/stage constants in `First90.tsx` to a dedicated `data/` directory.

## 2. Bug Detection & Logic Errors
### Findings
- **Missing Backend Functions**: `First90.tsx` (line 176) and `Crucible.tsx` (line 167) both attempt to fetch from `/.netlify/functions/diagnose`. This directory and the function itself are missing from the repository, causing these features to fail in a live environment.
- **Incomplete Error Handling**: The `try...catch` blocks around the `fetch` calls do not check `if (!response.ok)`. A non-2xx response will not throw an error, leading the code to attempt to parse potentially invalid JSON (e.g., a 404 HTML page).

### Suggestions
- **Verify Response Status**: Add `if (!response.ok) throw new Error(...)` immediately after the fetch call.
- **Mock Service or Implementation**: Provide a mock implementation of the `diagnose` function for local development or ensure the Netlify function is included in the deployment.

## 3. Security Analysis
### Findings
- **API Key Exposure (Critical)**: In `vite.config.ts` (lines 16-17), the `GEMINI_API_KEY` is being injected into the client-side `process.env`. This exposes the secret API key to anyone who views the source code or network requests of the deployed website.

### Suggestions
- **Remove Client-Side Injection**: Remove the `define` block from `vite.config.ts`. API keys should only be used in server-side environments (like the missing Netlify function) or through a proxy that handles authentication.

## 4. Performance
### Findings
- **Inline Styles**: `index.html` contains a large block of CSS. While fine for a single-page portfolio, it should ideally be integrated into the Tailwind system or separate CSS modules.
- **External Imports**: The use of `esm.sh` in the import map in `index.html` introduces external dependencies that could impact load times and reliability compared to bundling them via NPM.

### Suggestions
- **Consolidate Styling**: Move the styles from `index.html` to `index.css` using `@layer utilities` or standard CSS to keep the HTML clean.

## 5. Best Practices
### Findings
- **Modern Stack**: Excellent use of React 19, Tailwind CSS 4, and Framer Motion.
- **Missing Tests**: No unit or integration tests are present to verify the logic of the diagnostic engine or the Crucible game.

### Suggestions
- **Add Tests**: Introduce a testing framework like Vitest or Playwright to cover critical paths, especially the diagnostic logic.
- **Consistent Error Messaging**: Centralize error messages to provide a more consistent user experience across the application.

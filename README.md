# Martha Tazvivinga Portfolio

A personal portfolio built with React, TypeScript, and Vite.

## Local development

Install dependencies with `npm ci`, then run `npm run dev`.
On Windows, use `npm.cmd` if PowerShell blocks `npm.ps1`.

## Checks and production build

- `npm run lint` checks source files with Oxlint.
- `npm run build` runs TypeScript checks and creates the production site in `dist/`.
- `npm run preview` previews the production build locally.

There is currently no automated browser test suite. Before publishing, check mobile navigation, project links, the resume download, and contact-form validation.

## Structure and content

`src/App.tsx` assembles the page sections. Most sections live in `src/Components/`; navigation, About, and the reusable Card remain directly in `src/`. Images and the downloadable resume live in `public/`.

Update project links in `src/Components/Projects.tsx` and certificate links in `src/Components/Certifications.tsx`. Empty links display an unavailable message until a real URL is provided.

## Contact form

The contact form validates required fields and opens an email draft addressed to the email displayed in the Contact section. It requires a configured email app, and the visitor must send the draft themselves. It does not send mail through a backend or confirm delivery. The email address is also displayed for manual contact.

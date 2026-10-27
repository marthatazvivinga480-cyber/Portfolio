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

The form opens a draft in the visitor's configured email app. It does not send mail through a backend or confirm delivery. A direct email link is also provided. All contact links currently use the address from the original hero: marthatazvivinga480@gmail.com.

## Project presentation

Projects are displayed in a responsive grid with technology filters. Sideby, OAK Foundation and NovaCart appear first; expandable build notes distinguish contribution, technical decisions and verification. Sideby is not deployed yet, so only its source link is shown.

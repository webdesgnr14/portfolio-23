# Project Architecture

**Purpose:** Capture important architectural decisions, folder structure, technologies, and rationale for major technical choices.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Overview](#overview)
- [Folder Structure](#folder-structure)
- [Key Technologies](#key-technologies)
- [Notable Build/Architecture Points](#notable-buildarchitecture-points)
- [Architectural Decisions](#architectural-decisions)
- [References](#references)

<!-- END doctoc -->

## Overview
Brief description of the tech stack and major project goals.

## Folder Structure
```
/src                 # React components, logic, and SCSS
/build               # Production-ready build output (gitignored, rebuilt fresh by CI on every deploy)
/inc                 # PHP snippets like security headers
functions.php        # WP theme functions
vite.config.js       # Vite bundler config
package.json         # Node dependencies, scripts, engines
```

## Key Technologies
- React (v19), custom components, React Compiler
- Vite (Rolldown-based) for JS/SCSS bundling
- SCSS for styling
- Node >=24.0.0, Yarn 1.x (the project's `packageManager` field pins the exact version)
- WordPress backend

## Notable Build/Architecture Points
- In development, WordPress serves the page while Vite serves JS/CSS from `http://localhost:5173`; `vite.config.js`'s `server.origin` is required for dev asset URLs (including fonts) to resolve against Vite's origin instead of 404ing against WordPress.
- Environment variables loaded via GitHub Actions secrets for deploy; `.env.development`/`.env.production` are used for local Vite/PHP config only and are gitignored.
- Build/Deploy handled by CI, not local/manual scripts. `build/` is never committed - CI runs `yarn build` fresh on every push before deploying.
- CSP and security headers in `inc/security.php`. The CSP allows `localhost:*` and the local dev domain for script/font/connect sources so the Vite dev server keeps working regardless of which port it starts on.

## Architectural Decisions
- Why React for the theme?
- Data flow between WP & frontend
- Where to document new infra? (Update here!)

## References
- [WordPress Theme Developer Handbook](https://developer.wordpress.org/themes/)
- [React Docs](https://react.dev/)

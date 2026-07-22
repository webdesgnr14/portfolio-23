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
/build               # Production-ready build output (not tracked after CI/CD finishes)
/inc                 # PHP snippets like security headers
functions.php        # WP theme functions
webpack.config.js    # Webpack bundler config
package.json         # Node dependencies, scripts, engines
```

## Key Technologies
- React (v19), custom components
- Webpack for JS/SCSS bundling
- SCSS for styling
- Node >=20.17.0, NPM >=11
- WordPress backend

## Notable Build/Architecture Points
- Environment variables loaded via GitHub Actions secrets
- Build/Deploy handled by CI, not local/manual scripts
- CSP and security headers in inc/security.php

## Architectural Decisions
- Why React for the theme?
- Data flow between WP & frontend
- Where to document new infra? (Update here!)

## References
- [WordPress Theme Developer Handbook](https://developer.wordpress.org/themes/)
- [React Docs](https://react.dev/)

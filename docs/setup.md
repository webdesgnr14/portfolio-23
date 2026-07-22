# Project Setup Guide

**Purpose:** Step-by-step instructions for getting a development environment running and troubleshooting initial pitfalls.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Requirements](#requirements)
- [Local Development](#local-development)
- [Automatic Documentation Table of Contents](#automatic-documentation-table-of-contents)
- [.env, Credentials, and Secrets](#env-credentials-and-secrets)
- [Troubleshooting](#troubleshooting)

<!-- END doctoc -->

## Requirements
- Node.js: >=20.17.0 <21
- NPM: >=11 <12
- PHP: >=7.4 (8.x recommended for WP)
- MySQL

## Local Development
1. Clone repo
2. Install dependencies
   ```sh
   yarn install
   ```
3. Build or run in dev mode
   ```sh
   yarn dev
   ```
4. Set up your WordPress backend (locally or through your host)
5. Visit http://localhost:xxxx

## Automatic Documentation Table of Contents
- All markdown docs in `/docs` use an auto-generated TOC (Table of Contents).
- **Whenever you add a section or update a doc, run:**
   ```sh
   yarn doctoc
   ```
- This keeps navigation tidy—required before each PR/doc change!

## .env, Credentials, and Secrets
- All secrets go in GitHub Actions → Secrets, **never** in `.env` files in-repo.
- Local scripts for deploy (if needed) should use a `.env.local` not tracked by git.

## Troubleshooting
- Build fails: Check node version
- PHP errors: Make sure PHP >=7.4+
- Database connection: check credentials and host config

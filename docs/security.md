# Security

**Purpose:** Document security best practices, enforceable policies, and note all customizations for hardening the portfolio theme and deployment.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Security headers](#security-headers)
- [Deploy/hosting hardening](#deployhosting-hardening)
- [Repo hygiene](#repo-hygiene)
- [Recommendations](#recommendations)

<!-- END doctoc -->

## Security headers
- Defined in `inc/security.php` (Content Security Policy, X-Frame-Options, X-Content-Type-Options)
- `script-src`, `font-src`, and `connect-src` allow `localhost:*` and the local dev domain (wildcarded port) so the Vite dev server keeps working regardless of which port it starts on. This is inert for real visitors - `localhost` in a CSP header refers to the visitor's own machine, not the server.

## Deploy/hosting hardening
- Only deploy `/build` output (all else excluded by `deploy.ignore`)
- All deploy credentials handled via GitHub Actions secrets: never in code or repo
- SSH key for deploy is uniquely scoped to theme directory with limited permissions

## Repo hygiene
- No secrets or credentials in `.env` or committed files; `.env*` is gitignored
- `build/` is gitignored and never committed - CI rebuilds it fresh on every deploy
- If a credential is ever pasted into a chat session, an IDE, or any other tool, treat it as exposed and rotate it even if it was never committed to git

## Recommendations
- Avoid `'unsafe-inline'`/`'unsafe-eval'` CSP exceptions if possible
- Review and restrict third-party script/style/image origins in CSP as dependencies change
- Regenerate/revoke deploy keys on team/infra change
- The theme no longer uses a WordPress application password for anything - revoke it in wp-admin if it hasn't been already

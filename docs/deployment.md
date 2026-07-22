# Deployment

**Purpose:** Document how code goes live, what gets built, and how deploys are automated and secured.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Overview](#overview)
- [Build Process](#build-process)
- [GitHub Actions Deploy Workflow](#github-actions-deploy-workflow)
- [Deploy Instructions](#deploy-instructions)
- [Hosting/Server Notes](#hostingserver-notes)

<!-- END doctoc -->

## Overview
On every push to `master`, GitHub Actions builds the JS/CSS in `/build` and syncs the results to the theme folder on your production server using `rsync` over SSH.

## Build Process
- All production files are built with:
  ```sh
  yarn build
  ```
- Only `/build/` output is deployed.
- Files/folders matching `deploy.ignore` are excluded during deployment.
- **Never** commit `/build/` to the repo once CI/CD deploy is working.

## GitHub Actions Deploy Workflow
- Uses encrypted repository secrets:
  - `DEPLOY_HOST`, `DEPLOY_USER`, `DEPLOY_PATH`, `DEPLOY_SSH_KEY`
- Automated and auditable deployment; secrets never stored in codebase.

## Deploy Instructions
1. Generate SSH deploy key, add public half to server user.
2. Add repo secrets in GitHub.
3. Push to master: Actions build and deploy automatically.
4. Test site. If rollback needed, revert commit and redeploy.

## Hosting/Server Notes
- WP backend must be available; theme assets should land in production theme directory.

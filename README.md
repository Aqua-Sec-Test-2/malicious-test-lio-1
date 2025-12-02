# Aqua Test Template Repository

This is a **template repository** for testing Aqua Security scanning with intentionally vulnerable dependencies.

## How to Use This Template

1. Click the green **"Use this template"** button at the top of this repository
2. Give your new repository a name (e.g., `test-aqua-bug-12345`, `test-aqua-pr-scanning`)
3. Choose the owner and visibility settings
4. Click **"Create repository"**
5. Your new test repository is ready to use!

This allows you to quickly spin up new test repositories for different bugs or test scenarios without recreating the setup each time.

## Structure

- **frontend/**: React-based frontend application with vulnerable npm packages
- **backend/**: Node.js/Express backend application with vulnerable npm packages

## Known Vulnerabilities

This repository intentionally includes packages with known CVEs for testing purposes:

### Frontend Vulnerabilities
- `lodash@4.17.19` - CVE-2020-8203 (Prototype Pollution)
- `minimist@1.2.5` - CVE-2021-44906 (Prototype Pollution)
- `axios@0.21.1` - CVE-2021-3749 (ReDoS)
- `node-fetch@2.6.0` - CVE-2020-15168 (Unhandled Promise Rejection)

### Backend Vulnerabilities
- `express@4.17.0` - CVE-2022-24999 (XSS)
- `jsonwebtoken@8.5.0` - CVE-2022-23529 (Improper Validation)
- `mongoose@5.7.0` - Multiple CVEs
- `socket.io@2.3.0` - CVE-2020-28481 (CORS Bypass)
- `lodash@4.17.15` - Multiple Prototype Pollution CVEs

## Setup

### Frontend
```bash
cd frontend
yarn install
```

### Backend
```bash
cd backend
yarn install
```

## ⚠️ Warning

**DO NOT use this repository in production!** These dependencies contain known security vulnerabilities and are for testing purposes only.

## Aqua Security Integration

To scan this repository with Aqua:

1. Set up your Aqua credentials:
   ```bash
   export AQUA_KEY=<your-key>
   export AQUA_SECRET=<your-secret>
   export TRIVY_RUN_AS_PLUGIN=aqua
   ```

2. Run the scan:
   ```bash
   trivy .
   ```


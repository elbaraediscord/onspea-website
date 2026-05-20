# ONSPEA Website: Complete Deployment & Development Guide

This guide provides step-by-step instructions to set up your local development environment, host the website on Cloudflare Pages, and automate deployments using GitHub Actions.

---

## 1. Local Development Setup (VS Code)

To modify the website on your PC, follow these steps:

### Prerequisites
- **Node.js**: Install the latest LTS version from [nodejs.org](https://nodejs.org/).
- **pnpm**: Install pnpm by running `npm install -g pnpm` in your terminal.
- **Git**: Install Git from [git-scm.com](https://git-scm.com/).
- **VS Code**: Install Visual Studio Code from [code.visualstudio.com](https://code.visualstudio.com/).

### Steps
1.  **Clone the Repository**:
    Open your terminal (or VS Code terminal) and run:
    ```bash
    git clone https://github.com/elbaraediscord/onspea-website.git
    cd onspea-website
    ```
2.  **Install Dependencies**:
    ```bash
    pnpm install
    ```
3.  **Run Development Server**:
    ```bash
    pnpm dev
    ```
    Open [http://localhost:3000](http://localhost:3000) in your browser to see the site.
4.  **Recommended VS Code Extensions**:
    - **ESLint**: For code quality.
    - **Prettier**: For code formatting.
    - **Tailwind CSS IntelliSense**: For styling help.
    - **MDX**: For editing content files.

---

## 2. Hosting on Cloudflare Pages (Manual Setup)

Cloudflare Pages can host your site directly from GitHub.

1.  **Log in to Cloudflare**: Go to the [Cloudflare Dashboard](https://dash.cloudflare.com/).
2.  **Navigate to Workers & Pages**: Click on "Workers & Pages" in the sidebar, then "Create application" > "Pages" > "Connect to Git".
3.  **Connect GitHub**: Select your `onspea-website` repository.
4.  **Configure Build Settings**:
    - **Project Name**: `onspea`
    - **Production Branch**: `main`
    - **Framework Preset**: `Next.js`
    - **Build Command**: `pnpm build`
    - **Build Output Directory**: `out`
5.  **Environment Variables**:
    Add `NEXT_PUBLIC_WEB3FORMS_KEY` if you have a [Web3Forms](https://web3forms.com/) key for the contact form.
6.  **Save and Deploy**: Cloudflare will now build and host your site.

---

## 3. Automated Deployment (GitHub Actions)

To enable fully automatic deployments every time you push code to GitHub, you need to restore the workflow file I previously removed due to permission restrictions.

### Step A: Restore the Workflow File
In your local VS Code, create a file at `.github/workflows/deploy.yml` with this content:

```yaml
name: Deploy to Cloudflare Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v2
        with:
          version: 8
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'pnpm'
      - name: Install dependencies
        run: pnpm install
      - name: Build project
        run: pnpm build
      - name: Deploy to Cloudflare Pages
        uses: cloudflare/pages-action@v1
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
          projectName: onspea
          directory: out
          gitHubToken: ${{ secrets.GITHUB_TOKEN }}
```

### Step B: Configure GitHub Secrets
Go to your GitHub repository > **Settings** > **Secrets and variables** > **Actions** and add:
1.  **CLOUDFLARE_API_TOKEN**: Create this in Cloudflare (My Profile > API Tokens > Create Token > Edit Cloudflare Pages).
2.  **CLOUDFLARE_ACCOUNT_ID**: Found on your Cloudflare Dashboard URL or Pages project settings.

---

## 4. Modifying Content
- **Translations**: Edit files in `src/messages/` (fr.json, ar.json, en.json).
- **Static Data**: Edit JSON files in `src/data/` for the directory, partners, and board members.
- **News/Events**: Add or edit `.mdx` files in `src/content/`.

---

## 5. Deployment Script (Optional)
If you want to build locally and check for errors before pushing:
```bash
pnpm build
```
If this command succeeds, your site is ready for production.

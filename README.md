# ONSPEA — Organisation Patronale Algérienne

Site institutionnel de l'Organisation Nationale Syndicale du Patronat et des Entrepreneurs Algériens (ONSPEA).

## Technologies

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Internationalization**: [next-intl](https://next-intl-docs.vercel.app/) (FR, AR, EN)
- **Content**: MDX (Markdown with JSX)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: Cloudflare Pages

## Structure du Projet

- `src/app/[locale]`: Routes de l'application avec support multilingue.
- `src/components`: Composants UI réutilisables et sections de pages.
- `src/content`: Contenu MDX pour les actualités et événements.
- `src/data`: Fichiers JSON pour les données statiques (annuaire, bureau, etc.).
- `src/messages`: Fichiers de traduction JSON.
- `public`: Assets statiques (images, documents PDF).

## Installation et Développement

```bash
# Installation des dépendances
pnpm install

# Lancement du serveur de développement
pnpm dev

# Build pour la production
pnpm build
```

## Déploiement

Le projet est configuré pour un déploiement automatique sur **Cloudflare Pages** via GitHub Actions.

### Configuration requise (Secrets GitHub) :
- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`
- `WEB3FORMS_ACCESS_KEY` (pour les formulaires de contact)

## Licence

© 2026 ONSPEA. Tous droits réservés.

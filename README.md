# Text-a-Truck Sales Portal

Sales and marketing portal for the Text-a-Truck platform: **[sales.textatruck.acidni.net](https://sales.textatruck.acidni.net)**

Built with [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com), deployed to Azure Static Web Apps.

## Pages

| Page | URL | Purpose |
|------|-----|---------|
| Homepage | `/` | Hero, how-it-works, features, FAQ, CTA |
| Features | `/features` | Full feature breakdown |
| Pricing | `/pricing` | Free / Professional / Enterprise tiers |
| How It Works | `/how-it-works` | Step-by-step walkthrough |
| Contact | `/contact` | Sales and support contact form |

## Development

```bash
npm install
npm run dev      # Start dev server at localhost:4321
npm run build    # Build to dist/
npm run preview  # Preview production build
```

## Deployment

Push to `main` → GitHub Actions builds and deploys to Azure Static Web Apps automatically.

**Required secret:** `AZURE_STATIC_WEB_APPS_API_TOKEN`

## Related

- App portal: [textatruck.acidni.net](https://textatruck.acidni.net)
- Intake service repo: [acidni-textatruck-intake](https://github.com/Acidni-LLC/acidni-textatruck-intake)

# Portfolio — Johann Zitouni

Portfolio personnel développé avec **Next.js 14**, **TypeScript** et **Tailwind CSS**.

## Stack

- **Framework** : Next.js 14 (App Router)
- **Language** : TypeScript
- **Styling** : Tailwind CSS
- **Fonts** : Space Mono + DM Sans (Google Fonts)

## Lancer le projet

```bash
# Installer les dépendances
npm install

# Démarrer en développement
npm run dev

# Build de production
npm run build
npm start
```

Le portfolio sera disponible sur [http://localhost:3000](http://localhost:3000).

## Structure

```
portfolio/
├── app/
│   ├── globals.css       # Styles globaux + animations
│   ├── layout.tsx        # Layout racine + metadata
│   └── page.tsx          # Page principale
├── components/
│   ├── Navbar.tsx        # Navigation fixe avec scroll
│   ├── Hero.tsx          # Section hero + typewriter
│   ├── About.tsx         # Section à propos + terminal card
│   ├── Projects.tsx      # Grille de projets
│   ├── Skills.tsx        # Stack technique
│   ├── Contact.tsx       # Section contact
│   └── Footer.tsx        # Footer
├── data/
│   └── index.ts          # Toutes les données du portfolio
└── public/               # Assets statiques
```

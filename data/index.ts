export const profile = {
  name: "Johann Zitouni",
  title: "Senior Front-end Developer",
  about:
    "Développeur Front-end Senior avec 10+ ans d'expérience spécialisé en React, TypeScript et Next.js. Expert en architecture front-end scalable, qualité du code et bonnes pratiques de développement. Expérience confirmée en lead technique avec code reviews, mentoring d'équipes et focus sur la maintenabilité. Passionné par la création d'applications performantes et l'amélioration continue.",
  email: "johann.zitouni@gmail.com",
  github: "https://github.com/johannzs/",
  linkedin: "https://www.linkedin.com/in/johann-zitouni/",
};

export const skills = [
  {
    category: "Front-end",
    items: ["React.js", "Next.js", "TypeScript", "JavaScript ES6+", "Tailwind CSS", "SASS/SCSS", "Styled Components"],
  },
  {
    category: "State & Forms",
    items: ["Redux", "Zustand", "React Hook Form", "Zod"],
  },
  {
    category: "Testing & Quality",
    items: ["Jest", "Playwright", "ESLint", "Prettier", "Storybook", "Lighthouse", "Blackfire", "JMeter", "Dynatrace", "Sentry"],
  },
  {
    category: "Backend & APIs",
    items: ["Node.js", "NestJS", "GraphQL", "tRPC", "REST APIs", "Drupal 7/8/9/10", "PHP", "MySQL", "PostgreSQL", "Prisma", "Drizzle"],
  },
  {
    category: "DevOps & Tools",
    items: ["Docker", "GitHub Actions", "Jenkins", "Vercel", "CI/CD", "Figma"],
  },
];

export const projects = [
  {
    id: "eni-tunnel",
    title: "Tunnel de souscription ENI Plenitude",
    company: "ENI Plenitude",
    description:
      "Développement de 5 applications web stratégiques pour le rebranding digital d'un fournisseur d'énergie majeur (tunnels B2C/B2B, portails clients). Architecture et implémentation de composants React/Next.js réutilisables et accessibles. Intégration GraphQL et tRPC pour connexion au CRM Kraken. Optimisation continue des performances front-end avec suivi régulier des Core Web Vitals.",
    highlights: [
      "5 applications web stratégiques",
      "Composants React/Next.js réutilisables & accessibles",
      "Intégration GraphQL + tRPC (CRM Kraken)",
      "Validation Zod front/back",
      "Suivi Core Web Vitals",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind", "GraphQL", "tRPC", "Playwright", "Storybook", "Docker", "PostgreSQL", "Drizzle"],
    link: "https://souscription.eniplenitude.fr/besoins?electricityProductId=PLENIWEB_1AN_ELEC_FIX_12M_G_ELEC_202603_0DBD_RP13_A_202703",
    color: "#00C896",
  },
  {
    id: "eni-client",
    title: "Espace Client ENI Plenitude",
    company: "ENI Plenitude",
    description:
      "Portail client pour la gestion des contrats d'énergie. Développement de composants d'interface robustes et accessibles, intégration au CRM Kraken via GraphQL/tRPC. Code reviews régulières et contribution active aux bonnes pratiques de l'équipe.",
    highlights: [
      "Portail client haute disponibilité",
      "Intégration CRM Kraken",
      "Code reviews & bonnes pratiques",
      "Architecture composants scalable",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind", "GraphQL", "tRPC", "Storybook", "Docker"],
    link: "https://espace-client.eniplenitude.fr",
    color: "#00C896",
  },
  {
    id: "cure51",
    title: "Cure 51",
    company: "Cure 51",
    description:
      "Développement full-stack d'une plateforme de collecte de données patients en collaboration avec des centres médicaux. Création du design system et de composants UI réutilisables. Authentification 2FA via Twilio. TMA du site institutionnel WordPress headless avec front Next.js.",
    highlights: [
      "Plateforme données patients (full-stack)",
      "Design system from scratch",
      "Authentification 2FA (Twilio)",
      "Tests E2E Playwright",
      "WordPress headless + Next.js",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind", "Prisma", "PostgreSQL", "Zustand", "Playwright", "Docker", "WordPress", "Storybook"],
    link: "https://www.cure51.com",
    color: "#6C8EF5",
  },
  {
    id: "vilavi",
    title: "Groupe VILAVI",
    company: "Groupe VILAVI",
    description:
      "Lead technique sur un parc de 12 sites Drupal à fort trafic avec mentoring de 6 développeurs. Migration complète de sites majeurs de Drupal 7 vers Drupal 10. Développement de POC tunnels de vente (rachat crédit/mutuelle). Dockerisation des environnements de dev, mise en place A/B tests (Kameleoon/AB Tasty) et analyse comportementale.",
    highlights: [
      "Lead tech — 12 sites à fort trafic",
      "Mentoring 6 développeurs",
      "Migration Drupal 7 → 10",
      "POC tunnels de vente React",
      "A/B tests & analytics comportementaux",
      "Dockerisation des envs dev",
    ],
    stack: ["Drupal 7/8/9/10", "React.js", "PHP", "MySQL", "Tailwind", "Docker", "Jenkins", "AWS", "TypeScript", "SASS"],
    links: [
      { label: "Maxance", url: "https://www.maxance.com" },
      { label: "Assu 2000", url: "https://www.assu2000.fr" },
      { label: "Euro-Assurance", url: "https://www.euro-assurance.com" },
      { label: "Assureo", url: "https://www.assureo.fr" },
      { label: "AB Courtage", url: "https://www.abcourtage.com" },
      { label: "Vousfinancer", url: "https://www.vousfinancer.com" },
    ],
    color: "#F5A623",
  },
];

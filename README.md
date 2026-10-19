
# 🌼 Petit Monde — Application Web de Garderie

Application web responsive pour présenter une garderie d’enfants, ses services et ses activités. Le projet utilise Next.js pour le frontend et Express.js pour le backend.

## 🎯 Objectifs

- Créer une page d’accueil moderne et responsive.
- Présenter les services de la garderie.
- Afficher les services et activités depuis une API REST.
- Pratiquer Git et GitHub avec des branches et des merges.

## 🛠️ Technologies utilisées

- **Frontend :** Next.js, React, TypeScript
- **Design :** Bootstrap 5
- **Backend :** Node.js, Express.js
- **API :** REST
- **Versioning :** Git et GitHub

## ✨ Fonctionnalités

- Navbar avec navigation vers les sections.
- Page d’accueil avec présentation de la garderie.
- Présentation des services.
- Affichage dynamique des services depuis l’API.
- Affichage dynamique des activités depuis l’API.
- Section Contact.
- Interface responsive.

## 📁 Structure du projet

```text
garderie-app/
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   └── ApiData.tsx
├── backend/
│   ├── server.js
│   ├── package.json
│   └── .gitignore
├── package.json
└── README.md
```

## ⚙️ Installation

### 1. Cloner le dépôt

```bash
git clone https://github.com/yassminethabet/garderie-app.git
cd garderie-app
```

### 2. Installer et lancer le frontend

À la racine du projet :

```bash
npm install
npm run dev
```

Frontend : http://localhost:3000

### 3. Installer et lancer le backend

Ouvrir un deuxième terminal :

```bash
cd backend
npm install
node server.js
```

Backend : http://localhost:4000

**Important :** le frontend et le backend doivent fonctionner en même temps pour afficher les données de l’API.

## 🔗 Endpoints de l’API

| Méthode | Endpoint | Description |
|---|---|---|
| GET | `/api/garderie` | Informations sur la garderie |
| GET | `/api/services` | Liste des services |
| GET | `/api/activites` | Liste des activités |

Exemples de test :

- http://localhost:4000/api/garderie
- http://localhost:4000/api/services
- http://localhost:4000/api/activites

## 🌿 Organisation Git

Le projet utilise plusieurs branches pour organiser le développement :

- `feature/landing-page` : création de la page d’accueil.
- `feature/components` : séparation de la page en composants.
- `feature/backend` : création des API Express.
- `feature/api-integration` : connexion du frontend aux API.
- `docs/readme` : rédaction de la documentation.

Les fonctionnalités sont intégrées dans `main` après validation par merge.

## 👩‍💻 Auteur

Projet réalisé dans le cadre d’un TP de développement Web.

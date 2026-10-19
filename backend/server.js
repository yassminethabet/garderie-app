
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

// Route principale
app.get("/api/garderie", (req, res) => {
  res.json({
    nom: "Petit Monde",
    description:
      "Une garderie chaleureuse et sécurisée pour accompagner les enfants.",
    adresse: "Tozeur, Tunisie",
    telephone: "+216 70 000 000",
    email: "contact@petitmonde.tn",
  });
});

// Liste des services
app.get("/api/services", (req, res) => {
  res.json([
    {
      id: 1,
      nom: "Éveil et créativité",
      description: "Dessin, peinture et activités manuelles.",
      emoji: "🎨",
    },
    {
      id: 2,
      nom: "Apprentissage",
      description: "Jeux éducatifs et histoires pour les enfants.",
      emoji: "📚",
    },
    {
      id: 3,
      nom: "Jeux et bien-être",
      description: "Jeux, repos et moments de partage.",
      emoji: "🧸",
    },
  ]);
});

// Liste des activités
app.get("/api/activites", (req, res) => {
  res.json([
    {
      id: 1,
      nom: "Atelier de peinture",
      jour: "Lundi",
      emoji: "🖌️",
    },
    {
      id: 2,
      nom: "Lecture de contes",
      jour: "Mercredi",
      emoji: "📖",
    },
    {
      id: 3,
      nom: "Jeux en plein air",
      jour: "Vendredi",
      emoji: "🌳",
    },
  ]);
});

app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});

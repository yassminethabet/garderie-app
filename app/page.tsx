
"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
        <div className="container">
          <a className="navbar-brand fw-bold text-success fs-4" href="#">
            🌼 Petit Monde
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarMenu"
            aria-controls="navbarMenu"
            aria-expanded="false"
            aria-label="Ouvrir le menu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarMenu">
            <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">
              <li className="nav-item">
                <a className="nav-link" href="#accueil">Accueil</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">Nos services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
              <li className="nav-item">
                <a className="btn btn-success rounded-pill px-4" href="#contact">
                  Inscrire mon enfant
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="accueil"
        className="py-5"
        style={{ backgroundColor: "#fff8ef" }}
      >
        <div className="container py-lg-5">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <span className="badge rounded-pill text-success bg-white border mb-3 px-3 py-2">
                ♥ Une enfance heureuse commence ici
              </span>

              <h1 className="display-4 fw-bold mb-4">
                Grandir, apprendre et <span className="text-success">s’épanouir</span>
              </h1>

              <p className="lead text-secondary mb-4">
                Bienvenue chez Petit Monde ! Un espace chaleureux et sécurisé
                où chaque enfant découvre, joue et grandit à son rythme.
              </p>

              <div className="d-flex flex-wrap gap-3">
                <a href="#contact" className="btn btn-success btn-lg rounded-pill px-4">
                  Découvrir notre garderie →
                </a>
                <a href="#services" className="btn btn-outline-success btn-lg rounded-pill px-4">
                  Nos services
                </a>
              </div>

              <p className="mt-4 text-secondary small">
                ✓ Équipe attentionnée · ✓ Activités éducatives · ✓ Cadre sécurisé
              </p>
            </div>

            <div className="col-lg-6">
              <img
                src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1000&q=85"
                alt="Enfant heureux dans un environnement adapté"
                className="img-fluid rounded-5 shadow"
                style={{ width: "100%", height: "420px", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-5">
        <div className="container py-4">
          <div className="text-center mb-5">
            <span className="text-success fw-semibold">NOTRE UNIVERS</span>
            <h2 className="fw-bold display-6 mt-2">Des services pensés pour eux</h2>
            <p className="text-secondary">
              Pour apprendre, s’amuser et grandir en toute confiance.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm rounded-4 p-3">
                <div className="card-body text-center">
                  <div className="display-3 mb-3">🎨</div>
                  <h3 className="h4 fw-bold">Éveil et créativité</h3>
                  <p className="text-secondary">
                    Dessin, peinture et activités manuelles pour développer
                    l’imagination et la motricité.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm rounded-4 p-3">
                <div className="card-body text-center">
                  <div className="display-3 mb-3">📚</div>
                  <h3 className="h4 fw-bold">Apprentissage</h3>
                  <p className="text-secondary">
                    Des jeux éducatifs et des histoires pour découvrir le monde
                    et apprendre ensemble.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm rounded-4 p-3">
                <div className="card-body text-center">
                  <div className="display-3 mb-3">🧸</div>
                  <h3 className="h4 fw-bold">Jeux et bien-être</h3>
                  <p className="text-secondary">
                    Un environnement accueillant pour jouer, se reposer et
                    partager des moments avec les autres enfants.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section id="contact" className="py-5 bg-success text-white">
        <div className="container text-center py-4">
          <h2 className="fw-bold">Prêt à rejoindre notre petit monde ?</h2>
          <p className="mb-4">
            Contactez-nous pour découvrir notre garderie et nos activités.
          </p>
          <a href="mailto:contact@petitmonde.tn" className="btn btn-light btn-lg rounded-pill px-4 text-success">
            Nous contacter
          </a>
        </div>
      </section>

      <footer className="py-3 text-center text-secondary">
        <div className="container">
          © 2026 Petit Monde — Tous droits réservés.
        </div>
      </footer>
    </>
  );
}

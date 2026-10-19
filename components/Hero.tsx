
export default function Hero() {
  return (
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
              Grandir, apprendre et{" "}
              <span className="text-success">s’épanouir</span>
            </h1>

            <p className="lead text-secondary mb-4">
              Bienvenue chez Petit Monde ! Un espace chaleureux et sécurisé
              où chaque enfant découvre, joue et grandit à son rythme.
            </p>

            <div className="d-flex flex-wrap gap-3">
              <a
                href="#contact"
                className="btn btn-success btn-lg rounded-pill px-4"
              >
                Découvrir notre garderie →
              </a>

              <a
                href="#services"
                className="btn btn-outline-success btn-lg rounded-pill px-4"
              >
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
              style={{
                width: "100%",
                height: "420px",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

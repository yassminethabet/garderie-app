
export default function Services() {
  return (
    <section id="services" className="py-5">
      <div className="container py-4">
        <div className="text-center mb-5">
          <span className="text-success fw-semibold">NOTRE UNIVERS</span>
          <h2 className="fw-bold display-6 mt-2">
            Des services pensés pour eux
          </h2>
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
  );
}

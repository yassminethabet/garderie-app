
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import ApiData from "../components/ApiData";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <ApiData />

      <section id="contact" className="py-5 bg-success text-white">
        <div className="container text-center py-4">
          <h2 className="fw-bold">
            Prêt à rejoindre notre petit monde ?
          </h2>
          <p className="mb-4">
            Contactez-nous pour découvrir notre garderie et nos activités.
          </p>
          <a
            href="mailto:contact@petitmonde.tn"
            className="btn btn-light btn-lg rounded-pill px-4 text-success"
          >
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

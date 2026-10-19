
"use client";

import { useEffect, useState } from "react";

type Service = {
  id: number;
  nom: string;
  description: string;
  emoji: string;
};

type Activite = {
  id: number;
  nom: string;
  jour: string;
  emoji: string;
};

export default function ApiData() {
  const [services, setServices] = useState<Service[]>([]);
  const [activites, setActivites] = useState<Activite[]>([]);
  const [erreur, setErreur] = useState("");

  useEffect(() => {
    Promise.all([
      fetch("http://localhost:4000/api/services").then((res) => {
        if (!res.ok) throw new Error("Erreur services");
        return res.json();
      }),
      fetch("http://localhost:4000/api/activites").then((res) => {
        if (!res.ok) throw new Error("Erreur activités");
        return res.json();
      }),
    ])
      .then(([servicesData, activitesData]) => {
        setServices(servicesData);
        setActivites(activitesData);
      })
      .catch(() => {
        setErreur(
          "Impossible de charger les données. Vérifiez que le serveur backend fonctionne."
        );
      });
  }, []);

  return (
    <section className="py-5 bg-light">
      <div className="container">
        {erreur && <p className="alert alert-warning">{erreur}</p>}

        <h2 className="fw-bold text-center mb-4">Nos services (API)</h2>
        <div className="row g-4 mb-5">
          {services.map((service) => (
            <div className="col-md-4" key={service.id}>
              <div className="card h-100 border-0 shadow-sm rounded-4 p-3">
                <div className="card-body text-center">
                  <div className="display-3">{service.emoji}</div>
                  <h3 className="h4 fw-bold">{service.nom}</h3>
                  <p className="text-secondary">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h2 className="fw-bold text-center mb-4">Nos activités</h2>
        <div className="row g-4">
          {activites.map((activite) => (
            <div className="col-md-4" key={activite.id}>
              <div className="card h-100 border-0 shadow-sm rounded-4 p-3">
                <div className="card-body text-center">
                  <div className="display-3">{activite.emoji}</div>
                  <h3 className="h4 fw-bold">{activite.nom}</h3>
                  <p className="text-secondary">{activite.jour}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

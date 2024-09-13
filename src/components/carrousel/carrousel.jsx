"use client"
import React from 'react';
import styles from './carrousel.module.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importar CSS do Bootstrap

export default function Carrousel() {
  return (
    <section className={styles.carrouselMain}>
      <div id="carouselExampleRide" className="carousel bg-primary" data-bs-ride="carousel">
        <div className={styles.carrouselEnvelope} style={{ height: 600 }}>
          <div className="carousel-item active h-100">
            <img style={{ height: "100%", objectFit: 'contain' }} src="/assets/Projeto1.png" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item h-100">
            <img style={{ height: "100%", objectFit: 'contain' }} src="/assets/Projeto2.png" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item h-100">
            <img style={{ height: "100%", objectFit: 'contain' }} src="/assets/Projeto3.png" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item h-100">
            <img style={{ width: 500, height: "100%", objectFit: 'contain' }} src="/assets/Projeto4.png" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}

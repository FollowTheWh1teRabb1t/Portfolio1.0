import React from 'react';
import styles from './carrousel.module.css';
require("bootstrap/dist/js/bootstrap.bundle.min.js");
import "bootstrap/dist/css/bootstrap.min.css";


export default function Carrousel() {
    return (
        <section className={styles.carrouselMain}>
          <div  id="carouselExampleRide" class="carousel bg-primary" data-bs-ride="true">
              <div className={styles.carrouselEnvelope} style={{ height: 600 }}>
                <div class="carousel-item active h-100">
                  <img style={{ height: "100%", objectFit: 'contain' }} src="/assets/Projeto1.png" class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item h-100">
                  <img style={{ height: "100%", objectFit: 'contain' }} src="/assets/Projeto2.png" class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item h-100">
                  <img style={{ height: "100%", objectFit: 'contain' }} src="/assets/Projeto3.png" class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item h-100">
                  <img style={{ width: 500, height: "100%", objectFit: 'contain' }} src="/assets/Projeto4.png" class="d-block w-100" alt="..."/>
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">

                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
          </div>
        </section>
    )
}
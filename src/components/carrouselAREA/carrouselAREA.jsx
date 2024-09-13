import React from 'react';
import styles from './carrousel.module.css';
import Carrousel from '../carrousel/carrousel'

export default function carrouselArea() {
    return (
        <section id='projetos' className={styles.areaCarrousel}>
            <h1>Projetos</h1>
            <Carrousel/>
        </section>
    )
} 
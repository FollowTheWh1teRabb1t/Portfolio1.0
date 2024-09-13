'use client'
import React, { useState } from 'react';
import styles from './tecnologias.module.css';
import Card from '../cards/card';

export default function Tecnologias() {
    return (
        <section id='tecnologias' className={styles.tecnologias}>
            <h1>Conhecimentos Atuais</h1>
            <div className={styles.boxCards}>
                <Card imageUrl="/assets/javascript-js.svg"/>
                <Card imageUrl="/assets/html-5-logo.svg" />
                <Card imageUrl="/assets/css3.svg"/>
                <Card imageUrl="/assets/nodejs.svg"/>
                <Card imageUrl="/assets/react.svg"/>
                <Card imageUrl="/assets/database-sql.svg"/>
            </div>     
        </section>
    )
}

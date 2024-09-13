"use client"
import React from 'react';
import { useState } from  'react'
import styles from './hiddenDiv.module.css';

export default function hiddenDiv(props) {

     const [isVisible, setIsVisible] = useState(false);

     const toggleInvisibility = () => {
        setIsVisible(!isVisible)
     }

    return (
        <div>
            <button className={styles.buttonHidden} onClick={toggleInvisibility}><img className={styles.iconButton} src='/assets/info.svg'></img>Mais Detalhes</button>
            {isVisible && <div className={styles.invisibleDiv} style={{ display: 'block' }}>
                <p className={styles.text}>Experiência: 1 Ano</p>
                <p className={styles.text}>Nível: Intermediário/Avançado</p>
                <img src='/assets/fiveStars.svg'></img>
                </div>}
        </div>
    )
}
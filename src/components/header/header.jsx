import styles from './header.module.css';
import React from 'react';

export default function Header(props) {
    return (
        <header className={styles.top}>
            <div className={styles.boxImg}>
                <img className={styles.icone} src={props.pathIMG} />
            </div>
            <nav className={styles.navBar}>
                <a href='#projetos'>Projetos</a>
                <a href='#contato'>Contato</a>
                <a href='#sobre'>Sobre</a>
                <a href='#tecnologias'>Tecnologias</a>
            </nav>
        </header>
    )
}
"use client"
import React from 'react';
import styles from './contato.module.css';

export default function Contato() {
    return (
        <section id='contato' className={styles.contato}>
            <div className={styles.boxSocialMedia}>
                <div className={styles.boxStructure}>
                    <p className={styles.textDescription}><img className={styles.icon} src="assets/gmail.svg" alt="" />Email: lplplimald@gmail.com</p>
                </div>
                <div className={styles.boxStructure}>
                    <p className={styles.textDescription}><img className={styles.icon} src='assets/linkedin.svg'/>Linkedin: <a className={styles.link}
                     href='https://www.linkedin.com/in/felipe-lima-3189732b6/'>https://www.linkedin.com/in/felipe-lima-3189732b6/</a></p>
                </div>
                <div className={styles.boxStructure}>
                    <p className={styles.textDescription}><img  className={styles.icon}src='assets/github.svg'/>GitHub: <a 
                      className={styles.link} href='https://github.com/FollowTheWh1teRabb1t'>https://github.com/FollowTheWh1teRabb1t</a></p>
                </div>
                <div className={styles.boxStructure}>
                    <p className={styles.textDescription}><img className={styles.icon} src='assets/whatsapp.svg'/>WhatsApp: (42) 999033921</p>
                </div>
            </div>
            <div className={styles.formGroup}>
                <form action="https://formsubmit.co/lplplimald@gmail.com" method="POST">
                    <div>
                        <label>Nome</label>
                    </div>
                    <input type="text" name="name" placeholder="Nome:" required />
                    <div>
                        <label>Email:</label>
                    </div>
                    <input type="email" name="email" placeholder="Email:" required />
                
                    <div>
                        <label>Message</label>
                    </div>
                    <textarea name="message"  cols="30" rows="10" placeholder="Digite sua mensagem aqui!"></textarea>
                    <div>
                        <button className={styles.buttonForm} type="submit">Enviar</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

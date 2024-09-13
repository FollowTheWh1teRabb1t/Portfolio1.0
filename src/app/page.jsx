"use client"
import styles from "./page.module.css";
import Card from '../components/cards/card'
import Header from '../components/header/header'
import Tecnologias from '../components/tecnologias/tecnologias'
import Sobre from '../components/sobre/sobre'
import Contato from '../components/contato/contato'
import Footer from '../components/footer/footer'
import HiddenDiv from '../components/hiddenDiv/hiddenDiv'
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from 'react'
import { FaArrowUp } from 'react-icons/fa';



export default function Home() {

  useEffect(() => {
    // Este código só será executado no cliente
    const element = document.getElementById('some-element');
    if (element) {
      console.log(element);
    }
  }, []);

  return (
        <main id="some-element">
        <Header pathIMG="/assets/letter-f.png"/>
        <Sobre imgPath="/assets/perfil.png" img2Path="/assets/coding.webp"/>
        <Tecnologias/>
        <Contato/>
        <Footer/>
        </main>
  );
}

import React, { useState } from 'react';
import styles from './sobre.module.css';

export default function Sobre(props) {

        const [isSideBarOpen, setIsSideBarOpen] = useState(false);

        const toggleSideBar = () => {
            setIsSideBarOpen(!isSideBarOpen)
        }


    return (
            <header id='sobre' className={styles.sessionSobre}>

                <button  onClick={toggleSideBar}  className={`${styles.toggleButton} ${isSideBarOpen ? styles.shifted : styles.closed}`}>
                    {isSideBarOpen ? 'Close Sidebar' : 'Open Sidebar'}
                </button>
                <div className={`${styles.sidebar} ${isSideBarOpen ? styles.open : styles.closed}`}>
                <h1 className={styles.titleSec}>Cursos & Faculdade</h1>
                <div className={styles.coleggeBox}>
                    <img className={styles.collegeIcon} src="./assets/estacio.jpg"/>
                    <p className={styles.collegeName}>Cursando Análise e desenvolvimento de sistemas<img className={styles.iconVerify0} src='./assets/work-in-progress.png'/></p>
                </div>
                <div>
                    <img className={styles.courseIcon} src='./assets/devmedia.jpg'/>
                    <p className={styles.courseTitle}> [FullStack: HTML,CSS,JS,REACT,NODE,SQL] Outubro de 2023 até Maio de 2024 <img className={styles.iconVerify1}src='./assets/approved.png'/></p>
                </div>
                <div>
                    <img className={styles.course2Icon} src='./assets/horadecodar.png'/>
                    <p className={styles.course2Title}>[Desafios JavaScript] & [Typescript do básico ao avançado]<img className={styles.iconVerify2}src='./assets/approved.png'/></p>
                </div>
                <div>

                </div>
                </div>
                <div className={styles.boxImg}>
                        <img className={`${styles.perfil}`}  src={props.imgPath} />
                    </div>
                <div className={styles.presentation}>
                    <h1 className={styles.fadeIn}>Olá! Meu nome é Felipe José de Lima</h1>
                    <article className={styles.fadeIn}>Tenho 23 anos e sou apaixonado por tecnologia e programação. Há um ano e meio, embarquei em uma jornada de aprendizado dedicada à arte da programação, e desde então tenho trilhado um caminho empolgante rumo ao meu objetivo de me tornar um programador fullstack.

                    Com um forte domínio das tecnologias HTML, CSS, JavaScript, React, Node.js e SQL, estou preparado para enfrentar desafios e contribuir de forma significativa em projetos de desenvolvimento web. Aprendi que a tecnologia é uma ferramenta poderosa para transformar ideias em realidade, e estou determinado a utilizar meu conhecimento para criar soluções inovadoras e impactantes.

                    Atualmente, estou em busca da minha primeira oportunidade profissional na área de tecnologia, ansioso para aplicar minhas habilidades e continuar meu desenvolvimento em um ambiente estimulante e colaborativo. Estou comprometido em agregar valor a qualquer equipe em que eu faça parte, contribuindo com criatividade, dedicação e entusiasmo.

                    Estou construindo meu portfólio com projetos que refletem meu aprendizado e minha paixão pela programação. Cada linha de código é uma oportunidade para aprender e crescer, e estou ansioso para compartilhar minhas realizações e conquistas com você.

                    Se você procura um profissional comprometido, apaixonado por tecnologia e pronto para enfrentar desafios, estou pronto para me juntar à sua equipe e contribuir para o sucesso de seus projetos.

                    Estou animado para explorar as oportunidades que o mundo da tecnologia tem a oferecer e ansioso para fazer parte de uma comunidade que      compartilha minha paixão pelo desenvolvimento de software.

                    Vamos criar o futuro juntos!</article>
                </div>
            </header>
    )
}
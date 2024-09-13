import React from 'react'
import styles from './card.module.css'
import HiddenDiv from '../hiddenDiv/hiddenDiv'


export default function Card(props) {
    return (
        <div className={styles.card}>
            <h1>{props.title}</h1>
            <img className={styles.icon} src={props.imageUrl} />
            <HiddenDiv />          
        </div>
    )
}
import React from 'react';
import  styles from './header.module.scss'


export default function Header(){
    return(
        <div id={styles.Header}>
            <h1 id={styles.logo}>Pomofocus-XP</h1>

            <button>
                Settings
            </button>
        </div>
    )
}
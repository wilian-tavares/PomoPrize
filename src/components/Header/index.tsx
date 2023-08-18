import React from 'react';
import styles from './header.module.scss'
import { useState, useEffect } from 'react';

interface HeaderProps {
    theme: string;
}


export default function Header({ theme }: HeaderProps) {



    return (
         <div  id={styles.header} className={`styles.${theme}`}>
       
            <h1 id={styles.logo}>Pomofocus-XP</h1>
            

            <button>
                Settings
            </button>
        </div>
    )
}
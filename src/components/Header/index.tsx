import React from 'react';
import styles from './header.module.scss'
import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { AiOutlineClose, AiOutlineClockCircle } from 'react-icons/ai';

interface HeaderProps {
    theme: string;
    newFocus: number;
    newShort: number;
    newLong: number;

    HandleFocus: (newMinutes: number) => void;
    HandleShort: (newShort: number) => void;
    HandleLong: (newLong: number) => void;
    DeletProgress: () => void;
}

export default function Header({ theme, 
                                HandleFocus, 
                                HandleShort, 
                                HandleLong, 
                                newFocus, 
                                newShort,
                                newLong,     
                                DeletProgress                     
                            }: HeaderProps) {

 
    const [modalIsOpen, setIsOpen] = useState<boolean>(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div id={styles.header} className={styles[theme]}>

            <h1 id={styles.logo}>Pomofocus-XP</h1>
            <button onClick={openModal}>
                Settings
            </button>

            <Modal className={styles.modal}
                isOpen={modalIsOpen}
                onRequestClose={closeModal}

                contentLabel="Example Modal"
            >
                <div className={styles.closeModal}> {/* depois olhar isso*/}
                    <button onClick={closeModal} >
                        <AiOutlineClose size={50} />
                    </button>
                </div>

                <div className={styles.shieldModal}>
                    <div>
                        <div className={styles.titleModal}>
                            <p><AiOutlineClockCircle size='25' /> &nbsp; Time</p>
                            <strong>Time (minutes)</strong>
                        </div>

                        <div className={styles.shieldInputs}>
                            <div>
                                <p>Pomofocus</p>
                                <input
                                    type='number'
                                    min={1}
                                    value={newFocus}
                                    onChange={(e) => HandleFocus(Number(e.target.value))}
                                />
                            </div>
                            <div>
                                <p>Short-Break</p>
                                <input 
                                    type='number' 
                                    min={1}
                                    value={newShort}
                                    onChange={(e) => HandleShort(Number(e.target.value))} 
                                />
                            </div>
                            <div>
                                <p>Lon-Break</p>
                                <input 
                                    type='number' 
                                    min={1} 
                                    value={newLong}
                                    onChange={(e) => HandleLong(Number(e.target.value))}
                                />
                            </div>
                        </div>

                        <div className={styles.buttonDelet}>
                            <button onClick={DeletProgress}>Deletar Progresso</button>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}
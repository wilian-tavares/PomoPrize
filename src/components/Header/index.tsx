import React from 'react';
import styles from './header.module.scss'
import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { AiOutlineClose, AiOutlineClockCircle } from 'react-icons/ai';


interface HeaderProps {
    theme: string;
}



export default function Header({ theme }: HeaderProps) {

    const customStyles = {
        content: {
            
            // backgroundColor: 'red',
            // top: '50%',
            // left: '50%',
            // right: 'auto',
            // bottom: 'auto',
            //  marginRight: '-50%',
            // transform: 'translate(-50%, -50%)',
        },
    };
    const [modalIsOpen, setIsOpen] = useState<boolean>(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.

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
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
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
                                <input type='number' min={1} />
                            </div>

                            <div>
                                <p>Short-Break</p>
                                <input type='number' min={1} />
                            </div>

                            <div>
                                <p>Lon-Break</p>
                                <input type='number' min={1} />
                            </div>
                        </div>

                    </div>
                </div>


            </Modal>
        </div>
    )
}
import React, { useState } from "react";
import styles from './cardTimer.module.scss';
import { TbPlayerTrackNextFilled } from 'react-icons/tb'

interface CardtimerProps {
    Minutes: number;
    ShortBreak: number;
    LongBreak: number;
    Seconds: number;

    Running: boolean;
    ChallengeCompleted: boolean;
    Pause: () => void;
    Start: () => void;
    Reload: () => void;

    FocusTimer: () => void;
    ShortTimer: () => void;
    LongTimer: () => void;

    GetPoints: () => void;

    Short: boolean;
    theme: string;
}

interface buttonTextProps {
    focus: string;
    short: string;
    long: string;
}


export default function CardTimer({ Minutes, ShortBreak,
    LongBreak, Seconds,
    Running, Pause, Start, Reload,
    FocusTimer, ShortTimer, LongTimer,
    Short, theme, ChallengeCompleted, GetPoints
}: CardtimerProps) {

    const [buttonTexts, setButtonTexts] = useState<buttonTextProps>({
        focus: 'PomoFocus',
        short: 'Short-Break',
        long: 'Long-Break'
    })


    return (
        <div className={`${styles.cardContainer} ${styles[theme]}`}>
            <div className={styles.shieldButtons}>
                <button onClick={FocusTimer}></button>
                <button onClick={ShortTimer}></button>
                <button onClick={LongTimer}></button>
            </div>



            <strong>{(Minutes < 10) ? `0${Minutes}` : Minutes} : {(Seconds < 10) ? `0${Seconds}` : Seconds}</strong>



            <div className={styles.shieldPlay}>
                {/* <div className={styles.actionButtons}> */}


                {
                    (Minutes > 0 || Seconds > 0) && Running ? (
                        <button className={styles.play} onClick={Pause}>PAUSE</button>
                    ) : (
                        (!Running && Minutes === 0 && Seconds === 0) ? null : (
                            Running ? null : (
                                <button className={styles.play} onClick={Start}>START</button>
                            )
                        )
                    )
                }

                {
                    (Minutes === 0 && Seconds === 0 && !Running) ? (
                        <button className={styles.play} onClick={GetPoints}>Complete</button>
                    ) : null
                }

                {
                    Running ? (
                        <button className={styles.reload} onClick={Reload}>
                            {<TbPlayerTrackNextFilled size='40' />}
                        </button>
                    ) : null
                }

                {/* </div> */}
            </div>






        </div>
    )
}


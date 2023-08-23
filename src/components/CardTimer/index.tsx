import React from "react";
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

    Short: boolean;
    theme: string;

}


export default function CardTimer({ Minutes, ShortBreak,
    LongBreak, Seconds,
    Running, Pause, Start, Reload,
    FocusTimer, ShortTimer, LongTimer,
    Short, theme, ChallengeCompleted
}: CardtimerProps) {
    return (
        <div className={`${styles.cardContainer} ${styles[theme]}`}>
            <div className={styles.shieldButtons}>
                <button onClick={FocusTimer}>Pomofocus</button>
                <button onClick={ShortTimer}>Short Break</button>
                <button onClick={LongTimer}>Long Break</button>
            </div>


            <strong>{(Minutes < 10) ? `0${Minutes}` : Minutes} : {(Seconds < 10) ? `0${Seconds}` : Seconds}</strong>


            <div className={styles.shieldPlay}>
                {/* {
                  (Minutes === 0 && Seconds === 0  ) ? 
                  <button className={styles.play} onClick={Pause}>GetChallenge</button> : null
                }

                {
                    (Running) ?
                        <button className={styles.play} onClick={Pause}>PAUSE</button> :
                        <button className={styles.play} onClick={Start}>START</button>
                }

                {
                    (Running) ?
                        <button className={styles.reload} onClick={Reload}>{ <TbPlayerTrackNextFilled size='40'/>}</button> : null
                } */}


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
        <button className={styles.play} onClick={Reload}>GetChallenge</button>
    ) : null
}

{
    Running ? (
        <button className={styles.reload} onClick={Reload}>
            {<TbPlayerTrackNextFilled size='40' />}
        </button>
    ) : null
}










            </div>





        </div>
    )
}


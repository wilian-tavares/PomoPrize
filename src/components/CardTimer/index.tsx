import React from "react";
import styles from './cardTimer.module.scss';
import { TbPlayerTrackNextFilled} from 'react-icons/tb'

interface CardtimerProps {
    Minutes: number;
    ShortBreak: number;
    LongBreak: number;
    Seconds: number;

    Running: boolean;
    Pause: () => void;
    Start: () => void;
    Reload: () => void;

    FocusTimer: () => void;
    ShortTimer: () => void;
    LongTimer: () => void;

    Short: boolean;

}


export default function CardTimer({ Minutes, ShortBreak,
    LongBreak, Seconds,
    Running, Pause, Start, Reload,
    FocusTimer, ShortTimer, LongTimer,
    Short,
}: CardtimerProps) {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.shieldButtons}>
                <button onClick={FocusTimer}>Pomofocus</button>
                <button onClick={ShortTimer}>Short Break</button>
                <button onClick={LongTimer}>Long Break</button>
            </div>
            {/* {
                (Short) ? Minutes = 5 : Minutes = Minutes
            } */}

            <strong>{(Minutes < 10) ? `0${Minutes}` : Minutes} : {(Seconds < 10) ? `0${Seconds}` : Seconds}</strong>


            <div className={styles.shieldPlay}>
                {
                    (Running) ?
                        <button className={styles.play} onClick={Pause}>PAUSE</button> :
                        <button className={styles.play} onClick={Start}>START</button>
                }

                {
                    (Running) ?
                        <button className={styles.reload} onClick={Reload}>{ <TbPlayerTrackNextFilled size='40'/>}</button> : null
                }


            </div>





        </div>
    )
}


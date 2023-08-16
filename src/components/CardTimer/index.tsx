import React from "react";

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


export default function CardTimer({Minutes, ShortBreak, 
                                  LongBreak, Seconds,
                                  Running, Pause, Start, Reload, 
                                  FocusTimer, ShortTimer, LongTimer,
                                  Short,
                                    }: CardtimerProps){
    return(
        <div>
            <div>
                <button onClick={FocusTimer}>Pomofocus</button>
                <button onClick={ShortTimer}>Short Break</button>
                <button onClick={LongTimer}>Long Break</button>
            </div>
            {/* {
                (Short) ? Minutes = 5 : Minutes = Minutes
            } */}

            <strong>{(Minutes < 10 ) ? `0${Minutes}` : Minutes}: {(Seconds < 10) ? `0${Seconds}` : Seconds}</strong>
            
               
       
            {
                
            
                    (Running ) ? 
                    <button onClick={Pause}>PAUSE</button> :
                    <button onClick={Start}>START</button> 
                

            }
            {
                (Running) ?
                <button onClick={Reload}>Reload</button> : null
            }

            

            {/* {
                (Seconds === 0 && Minutes === 0 && Running === false) ?
                <button>Voltar</button> : null               
            } */}

        </div>
    )
}


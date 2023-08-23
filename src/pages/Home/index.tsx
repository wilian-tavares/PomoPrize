import { clear } from "console";
import CardTimer from "../../components/CardTimer"
import React from "react";
import { useState, useEffect } from "react";
import styles from './home.module.scss';
import Header from "../../components/Header";
import { stringify } from "querystring";


export default function Home() {
    const [newFocus, setNewFocus] = useState<number>(() => {
        const newfocusMemory = localStorage.getItem("NewFocus");
        if (newfocusMemory !== null) {
            return JSON.parse(newfocusMemory) || 0;
        }

    })


    const [newShort, setNewShort] = useState<number>(() => {
        const newShortMemory = localStorage.getItem("NewShort");
        if (newShortMemory !== null) {
            return JSON.parse(newShortMemory) || 0;
        }
    })

    const [newLong, setNewLong] = useState<number>(() => {
        const newLongMemory = localStorage.getItem("NewLong");
        if (newLongMemory !== null) {
            return JSON.parse(newLongMemory) || 0;
        }
    })

    const [minutes, setMinutes] = useState<number>(newFocus);
    const [shortBreak, setShortBreak] = useState<number>(newShort);
    const [longBreak, setLongBreak] = useState<number>(newLong);
    const [seconds, setSeconds] = useState<number>(0)

    const [running, setRunning] = useState<boolean>(false);
    const [start, setStart] = useState<boolean>(false)
    const [pause, setPause] = useState<boolean>(false)

    const [focus, setFocus] = useState<boolean>(true)
    const [short, setShort] = useState<boolean>(false)
    const [long, setLong] = useState<boolean>(false)

    const [stage, setStage] = useState<number>(1)

    const [theme, setTheme] = useState<string>('')

    // funções Timer

    function FocusTimer() {
        setFocus(true)
        setShort(false)
        setLong(false)
        console.log('FOCUS')
    }

    function ShortTimer() {
        setFocus(false)
        setShort(true)
        setLong(false)
        console.log('SHORT')

    }

    function LongTimer() {
        setFocus(false)
        setShort(false)
        setLong(true)
        console.log('LONG')

    }


    function Start() {
        setRunning(true)
        // alert('Start')
    }
    function Pause() {
        setRunning(false)
        // alert('PAUSE')
    }
    function Reload() {

        if (focus === true && stage < 4) {
            setShort(true)
            setFocus(false)
            setLong(false)
            console.log(stage)
            setStage((prevStage) => prevStage + 1)
            setRunning(false)


        }

        else if (focus === true && stage === 4) {
            setFocus(false)
            setShort(false)
            setLong(true)
            console.log(stage)
            setStage(1)
            setRunning(false)

        }

        else if (short === true) {
            setFocus(true)
            setLong(false)
            setShort(false)
            console.log(stage)
            setRunning(false)

        }
        else if (long === true) {
            setFocus(true)
            setLong(false)
            setShort(false)
            console.log(stage)
            setRunning(false)

        }
    }

    useEffect(() => {

        if (running) {
            const interval = setInterval(() => {
                setSeconds((prevSeconds) => prevSeconds - 1);

                if (seconds === 0) {
                    setSeconds(59);
                    setMinutes((prevMinutes) => prevMinutes - 1);
                }
            }, 10); // tempo padrão 1000 milisegundos

            if (seconds === 0 && minutes === 0) {
                clearInterval(interval)
            }

            return () => {
                clearInterval(interval);
            };
        }
    }, [seconds, minutes, running]);

    useEffect(() => {

        if (focus === true) {
            setMinutes(newFocus)
            setSeconds(0)
        }

        if (short === true) {
            setMinutes(newShort)
            setSeconds(0)
        }

        if (long === true) {
            setMinutes(newLong)
            setSeconds(0)
        }



    }, [focus, short, long])

    useEffect(() => {
        if (seconds === 0 && minutes === 0 && focus === true && stage < 4) {
            setFocus(false)
            setShort(true)
            setLong(false)
            console.log('Acabou o FOCUS > SHORT')
            console.log(stage)
            setStage((prevStage) => prevStage + 1)
            setRunning(false)

        }
        else if (seconds === 0 && minutes === 0 && focus === true && stage === 4) {
            setFocus(false)
            setShort(false)
            setLong(true)
            console.log('Acabou o FOCUS > LONG')
            setStage(1)
            setRunning(false)

        }
        else if (seconds === 0 && minutes === 0 && short === true) {
            setFocus(true)
            setShort(false)
            setLong(false)
            console.log('Acabou o SHORT > FOCUS')
            setRunning(false)

        }


        else if (seconds === 0 && minutes === 0 && long === true) {
            setFocus(true)
            setShort(false)
            setLong(false)
            console.log('Acabou o LONG > FOCUS')
            setRunning(false)
        }

    }, [seconds, minutes,])


    useEffect(() => {

        if (focus === true) {
            setTheme('focus')
        }
        else if (short === true) {
            setTheme('short')
        }
        else if (long === true) {
            setTheme('long')
        }
    }, [focus, short, long])



    function handleFocus(newFocus: number) {
        setNewFocus(newFocus);
        setMinutes(newFocus);
    }
    function handleShort(newShort: number) {
        setNewShort(newShort);
        setShortBreak(newShort);
    }
    function handleLong(newLong: number) {
        setNewLong(newLong);
        setLongBreak(newLong);
    }


    useEffect(() => {
        localStorage.setItem("NewFocus", JSON.stringify(newFocus));
        localStorage.setItem("NewShort", JSON.stringify(newShort));
        localStorage.setItem("NewLong", JSON.stringify(newLong));
    }, [newFocus, newShort, newLong])


    return (
        <>
            <Header
                theme={theme}
                HandleFocus={handleFocus}
                HandleShort={handleShort}
                HandleLong={handleLong}

                newFocus={newFocus}
                newShort={newShort}
                newLong={newLong}

            />

            <div className={`${styles.containerHome} ${styles[theme]}`}>


                <CardTimer
                    theme={theme}

                    Minutes={minutes}
                    ShortBreak={shortBreak}
                    LongBreak={longBreak}
                    Seconds={seconds}
                    Running={running}
                    Start={() => Start()}
                    Pause={() => Pause()}
                    Reload={() => Reload()}
                    FocusTimer={() => FocusTimer()}
                    ShortTimer={() => ShortTimer()}
                    LongTimer={() => LongTimer()}
                    Short={short} />

            </div>
        </>
    )
}
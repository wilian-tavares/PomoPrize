import { clear } from "console";
import CardTimer from "../../components/CardTimer"
import React from "react";
import { useState, useEffect } from "react";


export default function Home() {

    const [minutes, setMinutes] = useState<number>(11);
    const [shortBreak, setShortBreak] = useState<number>(5);
    const [longBreak, setLongBreak] = useState<number>(15);
    const [seconds, setSeconds] = useState<number>(0)

    const [running, setRunning] = useState<boolean>(false);
    const [start, setStart] = useState<boolean>(false)
    const [pause, setPause] = useState<boolean>(false)

    const [focus, setFocus] = useState<boolean>(true)
    const [short, setShort] = useState<boolean>(false)
    const [long, setLong] = useState<boolean>(false)

    const [stage, setStage] = useState<number>(1)

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

        if(focus === true && stage < 4) {
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
        
        else if (short === true){
            setFocus(true)
            setLong(false)
            setShort(false)
            console.log(stage)
            setRunning(false)

        }
        else if(long === true) {
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
            setMinutes(25)
            setSeconds(0)
        }

        if (short === true) {
            setMinutes(5)
            setSeconds(0)
        }

        if (long === true) {
            setMinutes(15)
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
        else if(seconds === 0 && minutes === 0 && short === true ) {
            setFocus(true)
            setShort(false)
            setLong(false)
            console.log('Acabou o SHORT > FOCUS')
            setRunning(false)

        }


        else if(seconds === 0 && minutes === 0 &&  long === true) {
            setFocus(true)
            setShort(false)
            setLong(false)
            console.log('Acabou o LONG > FOCUS')
            setRunning(false)
        }

    }, [seconds, minutes,])




    return (
        <div>
            <h1>Home</h1>

            <CardTimer Minutes={minutes} ShortBreak={shortBreak} LongBreak={longBreak} Seconds={seconds} Running={running} Start={() => Start()} Pause={() => Pause()} Reload={() => Reload()} FocusTimer={() => FocusTimer()} ShortTimer={() => ShortTimer()} LongTimer={() => LongTimer()} Short={short} />

        </div>
    )
}
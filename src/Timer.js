import React,{useEffect,useRef,useState} from 'react';
import "./timer.css";

function Timer () {
    const[timerDays,setTimerDays]=useState('00');
    const[timerHours,setTimerHours]=useState('00');
    const[timerMints,setTimerMints]=useState('00');
    const[timerSeconds,setTimerSeconds]=useState('00');

    let interval =useRef();
    const startTimer=()=>{
        const countdownDate =new Date('November 4,2020  24:00:00').getTime();

        interval =setInterval(()=>{
            const now =new Date().getTime();
            const distance = countdownDate-now;

            const days =Math.floor(distance/(1000*60*60*24));
            const hours =Math.floor((distance%(1000*60*60*24)/(1000*60*60)));
            const mints =Math.floor((distance%(1000*60*60*24))/(1000*60));
            const seconds =Math.floor((distance%(1000*60)/1000));

            if(distance<0){
                clearInterval(interval.current);
            }else{
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMints(mints);
                setTimerSeconds(seconds);
            }

        },1000);
    };
    useEffect(() => {
        startTimer();
         return () => {
            clearInterval(interval.current);
        }
    },)


    return (
        <div className="timer">
        <div>
            <section>
                <p>{timerDays}</p>
                <p><small>Days</small></p>
            </section>
            <span>:</span>
            <section>
                <p>{timerHours}</p>
                <p><small>hours</small></p>
            </section>
            <span>:</span>
            <section>
                <p>{timerMints}</p>
                <p><small>Mints</small></p>
            </section>
            <span>:</span>
            <section>
                <p>{timerSeconds}</p>
                <p><small>Second</small></p>
            </section>
        </div>
        </div>
    )
}



export default Timer;
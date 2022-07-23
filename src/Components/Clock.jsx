import React, { useState } from 'react';
import styles from '../styles/Clock.module.css'
export default function Clock(){
    
   const[clock, setClock] = useState( new Date())
   var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
   // var time = {hour: "numeric", hour12:"false", minutes:'numeric'};
   const date = new Date().toLocaleDateString('en-gb',options);
    //'en-gb'
    React.useEffect(()=>{
      setInterval(()=>tick(),1000)
    },[])

    function tick(){
      setClock(new Date())
    }

    return(
       <div className={styles.container}>
        <p className={styles.time}>{clock.toLocaleTimeString('es-MX',{ hour12: true })}</p>
        <p className={styles.date}>{date}</p>
       </div>
    )
  }
  


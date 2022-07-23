import React,{Component} from "react";
import styles from '../styles/About.module.css'
import { useHistory } from "react-router-dom";
import {BiArrowBack} from 'react-icons/bi'

export default function About(){
  
    const history = useHistory();
    return (
     <div className={styles.about}> 
     <div>
        <div className={styles.back}>
            <button className={styles.arrow} onClick={()=> { history.push('/')}}><BiArrowBack/></button>
         </div>
        <p className={styles.textAbout}>
        <h4>About this App</h4>
          With this app you can search any city and know the weather and more details about it. <br></br> <br></br>
          Technologies used are JavaScript, HTML, CSS and React-Redux. <br></br><br></br>
          Created by Enrique Sixto
         </p>
         </div>  
      </div>
    );

}


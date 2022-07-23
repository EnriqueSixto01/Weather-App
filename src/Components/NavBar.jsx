import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import styles from '../styles/Nav.module.css'
import { WiDayCloudy } from "react-icons/wi";

function NavBar() {

    
  return (
    <div className={styles.nav}>
      <Link exact to={'/'} style={{textDecoration:'none'}}> <div className={styles.textHome}> Weather App
      <div className={styles.home}><WiDayCloudy/></div>
      </div>
     </Link>       
      <SearchBar/> 
      <Link to={'/about'} className={styles.textAbout}> About</Link>
    </div>
   
  );
}

export default NavBar;

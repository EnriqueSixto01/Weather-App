import React from 'react'
import NavBar from "./Components/NavBar.jsx";
import DetailCity from './Components/DetailCity';
import { Route } from "react-router-dom";
import About from "./Components/About.jsx";
import Cards from "./Components/Cards.jsx";
import styles from './App.module.css'
import Clock from './Components/Clock.jsx';

function App() {
  return (
    <div className={styles.app}>
       <div className={styles.bkg}>
        <div className ={styles.container}>
      <NavBar />  
      <Route exact path={'/'} component={Clock} />   
      <Route exact path={'/'} component={Cards} />
      <Route exact path={'/about'} component={About} />
      <Route exact path='/ciudad/:id' component={DetailCity}/>
       </div>
      </div>
    </div>
  );
}

export default App;

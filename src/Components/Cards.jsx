import React from "react";
import { connect } from "react-redux";
import Card from "./Card.jsx";
import styles from '../styles/Cards.module.css'

function Cards({ cities }) {
  return (
    <div className={styles.citiesContainer}>
      {
        cities && cities?.map((c) => (    //si existe cities y ademas hay algo en cities que se pueda mapear  
            <Card
            id={c.id}
            key={c.id}
            temp={c.temp}
            max={c.max}
            min={c.min}
            name={c.name}
            img={c.img}
            description={c.weather}
          /> 
      ))
        }
    </div>
  );
}

function mapStateToProps(state) {
  return {
    cities: state.cities    //nos traemos lo que se aloja en el estado de Redux que son objetos donde cada objeto es una city.
  };
}

export default connect(mapStateToProps)(Cards);

import React from "react";
import s from "../styles/Card.module.css";
import { deleteCard } from "../Actions/actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {IoCloseCircleOutline} from 'react-icons/io5'

export function Card({ deleteCard, name, min, max, img, id, temp, description}) {
  // acá va tu código

  function handleOnClick(e){
    e.preventDefault()
    deleteCard(id)
  }
  return (
      <div className={s.card}>
        <div className={s.icon}>
          <Link to={`/ciudad/${id}`} style={{textDecoration:'none'}}>
             <p style={{fontSize: '18px',  fontWeight:'bold'}}className= {s.textMain}>
              {name}
             <button onClick={handleOnClick}  className={s.button}><IoCloseCircleOutline/></button></p>
           </Link>             
        </div>
          <div className={s.icon}>
          <p style={{fontSize:'30px', fontWeight:'bold'}} className={s.text}>{temp}°</p>
            <img
            className={s.img}
            src={`http://openweathermap.org/img/wn/${img}@2x.png`}
            alt="clima"
            />
          </div>                     
          <p className={s.text}>{description}</p>                          
            <p style ={{fontSize: '13px'}}className={s.text}>{min}°/ {max}°</p>                
      </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    deleteCard: (id) => dispatch(deleteCard(id)),
  };
}

export default connect(null,mapDispatchToProps)(Card);
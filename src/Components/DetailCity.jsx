import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { getDeatilCity } from "../Actions/actions";
import {BiArrowBack} from 'react-icons/bi'
import { WiThermometer, WiStrongWind, WiHumidity, WiBarometer, WiCloudy, WiFog} from "react-icons/wi";
import styles from '../styles/DetailCity.module.css'

function DetailCity(props) {
  //console.log("esto es props.detail: ", props.detail);
  const history = useHistory();
  let params = props.match.params.id;
  //console.log(params);

  React.useEffect(() => {
    // console.log('se ejecuta')
    props.getDeatilCity(params);
  },[]);

  return (
    <div className={styles.container}>
      {
        props.detail?(  //validamos si hay halgo en el estado de redux en la propiedad detail:{}
        <div>
           <div className={styles.back}>
            <button className={styles.arrow} onClick={()=> { history.push('/')}}><BiArrowBack/></button>
           </div>
          <div className={styles.textDetail}>
            <h3>{props.detail.name}</h3>
            <p><WiThermometer/> Temperature: {props.detail.temp}°</p>
            <p><WiStrongWind/> Wind: {props.detail.wind} km</p>
            <p><WiHumidity/> Humidity: {props.detail.humidity}%</p>
            <p><WiBarometer/> Pressure: {props.detail.pressure} mb</p>
            <p><WiCloudy/> Clouds: {props.detail.clouds}%</p>
            <p><WiFog/> Visiblity: {props.detail.visibility} km</p>
          </div>
          </div>):null
      }
     
    </div>
  );
}
function mapStateToProps(state) {
  return {
    detail: state.detail,
  };
}
const mapDispatchToProps = {
  getDeatilCity,
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailCity);

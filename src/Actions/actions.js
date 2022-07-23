export const GET_CITY = "GET_CITY";
export const DETAIL_CITY = "DETAIL_CITY";
export const DELETE_CITY = "DELETE_CITY";

export let getCities = (name) => {
  return function (dispatch) {
    return fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=c8030b0cee7ed8220b4f8efb3c179f33&units=metric&lang=es` //endPoint
    )
      .then((response) => response.json())
      .then((city) => {
        if (city.main !== undefined) {
          const ciudad = {                  //En un objeto guardamos solo los datos que nos interesan de la API
            name: city.name,
            temp: Math.round(city.main.temp),
            min: Math.round(city.main.temp_min),
            max: Math.round(city.main.temp_max),
            img: city.weather[0].icon,
            weather: city.weather[0].description, //descripcion de clima
            id: city.id,
          };
          dispatch({ type: GET_CITY, payload: ciudad });
        } else {
          alert("Agrega una Ciudad Valida");
        }
      });
  };
};

export let getDeatilCity = (id) => {
  return function (dispatch) {
    return fetch(
      `https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=c8030b0cee7ed8220b4f8efb3c179f33&units=metric&lang=es` //&lang=es
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.main !== undefined) {
          const detail = {                    //En un objeto guardamos solo los datos que nos interesan de la API
            name: data.name,
            temp: Math.round(data.main.temp),
            wind: data.wind.speed,    //viento
            humidity: data.main.humidity,
            pressure: data.main.pressure,
            visibility: (data.visibility/1000), 
            id: data.id,
            clouds: data.clouds.all //nubosidad
          };
          dispatch({ type: DETAIL_CITY, payload: detail });
        }
      });
  };
};
export let deleteCard = (id) => {
  return { type: DELETE_CITY, payload: id };
};
//https://api.openweathermap.org/data/2.5/weather?q=Mexico&appid=c8030b0cee7ed8220b4f8efb3c179f33&units=metric

//const apikey ='c8030b0cee7ed8220b4f8efb3c179f33'

import { DELETE_CITY, DETAIL_CITY, GET_CITY } from "../Actions/actions"

const initialState = {
    cities: [],                  //aqui se guardara cada city que se agregue 
    detail: {}
}


export default function rootReducer(state=initialState, action){
    switch(action.type){ //evaluamos la propiedad type de cada creator action en funcion del parametro action del reducer
        case GET_CITY:
            return{
                ...state,
                cities: [...state.cities, action.payload] //cuando se despacth la accion getCites se va a agregar una nueva city al
                                                            ///array cities del estado de Redux
            }
        case DETAIL_CITY:
            return{
                ...state,
                detail: action.payload
            }
        case DELETE_CITY:
            return{
                ...state,
                cities: state.cities.filter(u => u.id !== action.payload)
            }
        default:
            return {...state}
    }
}
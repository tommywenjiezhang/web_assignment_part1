import { combineReducers } from "redux";
import {FETCH_CITY_IMAGE, GET_ALL_CITIES, SELECT_CITY} from "../action/actionType";

const citiesInitialState = {
    cities:[]
}
const cities = (state=citiesInitialState, action) => {
    switch (action.type) {
        case GET_ALL_CITIES:
            const {cities} = action.payload;
            return {
                ...state,
                cities: [...state.cities, ...cities]
            };
        case SELECT_CITY:
            const {city} = action.payload;
            return{
                ...state,
                city:{...state.city,...city}
            };
        case FETCH_CITY_IMAGE:
            const {url} = action.payload;
            console.log(url)
            return{
                ...state,
                cityImage:{
                    ...state.cityImage,
                    url
                }
            }
        default:
            return {...state}

    }
}

export default combineReducers({cities});
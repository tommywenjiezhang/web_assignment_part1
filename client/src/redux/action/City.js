import {FETCH_CITY_IMAGE, GET_ALL_CITIES, SELECT_CITY} from "./actionType";
import axios from 'axios';

export const get_all_cities = function(){
    return function(dispatch){
        fetch("/api/cities").then(res => res.json()).then(
            (data) => {
                dispatch(city(data))}
        )
    }
}

const city = (cities) => {
    return {
        type:GET_ALL_CITIES,
        payload:
            {
                cities
            }
    }
}

export const get_single_city = (city) => {
    console.log("get_single_city fired")
    return{
        type: SELECT_CITY,
        payload:{
            city
        }
    }
}

// export const get_city_image = function(cityName){
//     return function(dispatch){
//         axios.get("https://api.unsplash.com/search/photos/",
//            {params:{
//                    client_id:process.env.REACT_APP_UPSPLASH_API_KEY,
//                    query: cityName
//            }}).then(function(results ){
//             console.log(results)
//                let result = results.data.results[0];
//                console.log("action ========")
//
//                let url = result.urls.regular;
//                dispatch(cityImage(url))
//         }).catch((err) => {
//             console.log(err)
//         })
//     }
// }

const cityImage  = (url) => {
    return {
        type:FETCH_CITY_IMAGE,
        payload:{
            url
        }
    }
}
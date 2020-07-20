import {FETCH_CITY_IMAGE, GET_ALL_CITIES, SELECT_CITY,DELETE_CITY, ADD_CITY } from "./actionType";
import axios from 'axios';
import _ from 'lodash'
import * as CityActionCreator from "./actionCreator";


const citiesRequestInstance = axios.create({baseURL:"http://localhost:8081/"})

const _get_all_cities = async (dispatch) => {
    const citiesResponse = await citiesRequestInstance.get("/api/cities/")
    dispatch(CityActionCreator.getAllCities(citiesResponse.data))
}


export const get_all_cities = () => dispatch => _get_all_cities(dispatch)
export const get_single_city = (city) => CityActionCreator.getSingleCity(city)
export const get_city_image = cityName => dispatch => _fetchGetCityImage(cityName,dispatch)
export const delete_city = city_id => dispatch => _delete_city(city_id,dispatch)
export const create_city = city => dispatch => _create_city(city,dispatch)




const _delete_city = _.memoize(async (city_id, dispatch) => {
    const response = await axios.delete("/api/cities/" + city_id)
    dispatch(CityActionCreator.deleteCity(response))
})

const _create_city = _.memoize(async (city,dispatch) => {
    console.log("city is ")
    console.log(city)
    const cityPostRes = await axios.post("/api/cities/", {
        ...city
    })
    dispatch(CityActionCreator.addCity(cityPostRes))
})

const _fetchGetCityImage = _.memoize(async (cityName,dispatch) => {
     const response = await axios.get("https://api.unsplash.com/search/photos/",
            {
                params: {
                    client_id: process.env.REACT_APP_UPSPLASH_API_KEY,
                    query: cityName
                }
            })
        const url = response.data.results[0].urls.regular
        dispatch(CityActionCreator.cityImage(url))
})


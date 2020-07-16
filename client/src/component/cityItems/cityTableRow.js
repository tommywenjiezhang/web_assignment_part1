import React from 'react';
import { connect } from "react-redux";
import {get_single_city} from "../../redux/action/City"

const CityTableRow = (props) => {
    const {city,key,get_single_city} = props;
    return (
        <tr key = {key} onClick={() => get_single_city(city)}  >
            <td >{city.id}</td>
            <td>{city.cityName}</td>
            <td>{city.country}</td>
            <td>{city.abbreviation}</td>
            <td>{city.population}</td>
        </tr>
    );
};

export default connect(null, {get_single_city})(CityTableRow);
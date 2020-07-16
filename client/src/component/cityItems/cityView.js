import React, {Component} from 'react';
import {connect} from "react-redux";
import {get_city_image} from "../../redux/action/City";

class CityView extends Component {
    constructor(props) {
        super(props);
        // this.renderCityImage = this.renderCityImage.bind(this);
    }
    componentDidMount() {

    }
    componentDidUpdate() {
        // this.renderCityImage();
    }
    renderCityMap(){

    }
    renderCityImage() {
        // const {city} = this.props.city ? this.props : {city: {cityName: "New York"}}
        // if(city.cityName && city.cityName.length > 0){
        //     this.props.get_city_image(city.cityName);
        // }
    }


    render() {
        const {city} = this.props.city ? this.props : {city: {cityName: "New York"}}
        return (
            <div className="card">
                <div className='row'>
                    <div className="col-md-6">
                        <h1 className="card-title">{city.cityName}</h1>
                    </div>
                    <div className="col-md-6">

                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({cities}) => {
    const {city} = cities;
    return {city} ;
}
export default connect(mapStateToProps, null)(CityView);
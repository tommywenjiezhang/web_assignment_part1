import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form'
import { connect } from "react-redux";
import {create_city} from "../../redux/action/City";

class CityForm extends Component {
    constructor(formProps) {
        super(formProps);
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    renderInput({input,label}){
        return (
            <div className="form-group">
                <label >{label}</label>
                <input className="form-control" {...input}/>
            </div>

        )
    }
    handleSubmit(formValues){
       let errors =  validateForm(formValues)
       this.props.create_city(formValues)
    }



    render() {
        const{handleSubmit } = this.props
        return (
            <form onSubmit={this.props.handleSubmit(this.handleSubmit)}>
                <Field  name="lat" component={this.renderInput} label="lat"/>
                <Field name="lng" component={this.renderInput} label="lng"/>
                <Field name="abbreviation" component={this.renderInput} label="abbreviaton"/>
                <Field name="capital" component={this.renderInput} label="capital"/>
                <Field name="cityName" component={this.renderInput} label="cityName"/>
                <Field name="country" component={this.renderInput} label="country"/>
                <Field name="population" component={this.renderInput} label="population"/>
                <button type="submit">Submit</button>
            </form>
        );
    }

}

const  validateForm = (values) => {
    const errors = {}
    const cityProperty = ["lat","lng","abbreviation","capital","cityName","country","population"]
    for(var key of cityProperty){
        console.log(values[key])
        if(!values[key]){
            errors.messages = key + " cannot be empty"
            return errors
        }
    }
    return errors
}

const formWrapper = reduxForm({form:'city'})(CityForm)
export default connect(null, {create_city})(formWrapper)
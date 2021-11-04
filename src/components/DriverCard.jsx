import React, { Component } from 'react'
import Rating from './Rating'
import './DriverCard.css'

export default class DriverCard extends Component {
    divStyle = {
        backgroundColor: "#455eb5",
        display: "flex"
    };

    render() {
        return (
            <div style={this.divStyle}>
                <img className="driverImg" src={this.props.img} alt="" />
                <div>
                    <h1>{this.props.name}</h1>
                    <Rating>{this.props.rating}</Rating>
                    <p>{this.props.car.model} {this.props.car.licensePlate && `- ${this.props.car.licensePlate}`}</p>
                </div>
            </div>
        )
    }
}

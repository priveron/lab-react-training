import React, { Component } from 'react'

export default class Random extends Component {
    render() {
        return (
            <div className="random">
                <p>Random value between {this.props.min} and {this.props.max} ={'>'} {Math.floor((Math.random() * (this.props.max - this.props.min + 1)) + this.props.min)}</p>
            </div>
        )
    }
}

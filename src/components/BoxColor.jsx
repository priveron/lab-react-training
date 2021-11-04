import React, { Component } from 'react'

export default class BoxColor extends Component {
    render() {
        return (
            <div style={{backgroundColor: `rgb(${this.props.r}, ${this.props.g}, ${this.props.b})`}}>
                <p>rgb({this.props.r}, {this.props.g}, {this.props.b})
                <br />
                #{this.props.r.toString(16).padStart(2, '0')}{this.props.g.toString(16).padStart(2, '0')}{this.props.b.toString(16).padStart(2, '0')}</p>
            </div>
        )
    }
}

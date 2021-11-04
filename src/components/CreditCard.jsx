import React, { Component } from 'react'

export default class CreditCard extends Component {
    creditStyle = {
        backgroundColor: this.props.bgColor,
        color: this.props.color
    };

    render() {
        return (
            <div style={this.creditStyle}>
                <header>{this.props.type}</header>
                <main>{this.props.number.slice(-4).padStart(this.props.number.length, '*')}</main>
                <footer>
                    <p>Expires {this.props.expirationMonth}/{this.props.expirationYear}&emsp;{this.props.bank}
                    <br />
                    {this.props.owner}</p>
                </footer>
            </div>
        )
    }
}

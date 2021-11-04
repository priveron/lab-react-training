import React, { Component } from 'react'

export default class ClickablePicture extends Component {
    state = {
        img: this.props.img
    };

    clickHandler = () => {
        const tmpImg = (this.state.img === this.props.img) ? this.props.imgClicked : this.props.img;
        this.setState({
            img: tmpImg
    });
}

    render() {
        return (
            <img src={this.state.img} alt="" onClick={this.clickHandler}/>
        )
    }
}

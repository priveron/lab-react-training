import React, { Component } from 'react'

export default class LikeButton extends Component {
    state = {
        like: 0,
        style: {
            backgroundColor: 'purple'
        }
    };

    colors = ['purple','blue','green','yellow','orange','red'];

    clickHandler = () => {
        this.setState({
            like: this.state.like + 1,
            style: {
                backgroundColor: this.colors[(this.state.like + 1) % 6]
            }
        })
    };

    render() {
        return (
            <div style={this.state.style} onClick={this.clickHandler}>
                {this.state.like} {this.state.like === 1 ? `Like` : `Likes`}
            </div>
        )
    }
}

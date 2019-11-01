import React, { Component } from 'react'

export default class GameFormContainer extends Component {
    onSubmit = (event) => {

    }
    render() {
        return (
            <div>
                Lets Play game
                <button onSubmit={this.onSubmit}>Join Game</button>
            </div>
        )
    }
}

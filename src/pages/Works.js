import React, { Component } from 'react'

export class Works extends Component {
    render() {
        return (
            <>
                <h1 className= " flex center">Works Page</h1>
                <a href="/"> back </a>
                <div className= " flex around">
                <a href="https://listenandtalk-a3074.firebaseapp.com"><p>Listen and Talk App</p></a>
                <a href="https://tomeu.herokuapp.com/"><p>Tomeu App</p></a>
                <a href="https://luyezhan.github.io/Loveweb/"><p>Love App</p></a>
                <a href="https://luyezhan.github.io/Code-Invader/"><p> Code Invader</p></a>     
                </div>           
            </>
        )
    }
}

export default Works


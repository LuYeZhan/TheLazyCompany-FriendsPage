import React, { Component } from 'react'

export class Works extends Component {
    render() {
        return (
            <>
                <h1 className= " flex center">Works Page</h1>
                <a className="flex center back-padding" href="/"> back </a>
                <div className= "flex container">
                    <a className="cards" href="https://listenandtalk-a3074.firebaseapp.com"><p>Listen and Talk App</p></a>
                    <a className="cards" href="https://tomeu.herokuapp.com/"><p>Tomeu App</p></a>
                    <a className="cards" href="https://luyezhan.github.io/Loveweb/"><p>Love App</p></a>
                    <a className="cards" href="https://luyezhan.github.io/Code-Invader/"><p> Code Invader</p></a>     
                </div>           
            </>
        )
    }
}

export default Works


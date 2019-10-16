import React, { Component } from 'react'

export class Works extends Component {
    render() {
        return (
            <>
                <h1 className= " flex center">Works Page</h1>
                <a className="flex center back-padding" href="/"> back </a>
                <div className= "flex container">
                    <a className="cards" href="https://listenandtalk-a3074.firebaseapp.com"><h3>Listen and Talk App</h3>
                    <p>A Social Network based on audio in 9 days, using React, Express, Node.js and MongoDB.</p>
                    </a>
                    <a className="cards" href="https://tomeu.herokuapp.com/"><h3>Tomeu App</h3>
                    <p>Use of Express and Node.js to create an app web marketplace for homemade food experiences. Created in 7 days.</p></a>
                    <a className="cards" href="https://luyezhan.github.io/Loveweb/"><h3>Love App</h3><p>Use of object oriented programing to create a social app to find your soul mate using external API. Created in 3 days.</p></a>
                    <a className="cards" href="https://luyezhan.github.io/Code-Invader/"><h3> Code Invader</h3><p>Creation of a Web/App Game like space invader with Javascript DOM, and CSS. Created in 4 days.</p></a>     
                </div>           
            </>
        )
    }
}

export default Works


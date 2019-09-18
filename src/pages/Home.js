import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default class Home extends Component {
    render() {
        return (
            <div>
            <video id="hooli-video" playsinliNe="true" autoplay="" muted="true" loop="true" buffered=""> 
            <source src="./videos/Hoolisubsenglish.mov" type="video/mp4"/>  
            {/* <source src="https://www.shackletongroup.com//assets/app/video/shck-background-intro-v1.webm" type="video/webm"/> */}
            </video>
                <Navbar />
                <h1 className = "flex center">Home Page</h1>
                <div className= "flex column center">
                    <a href="https://listenandtalk-a3074.firebaseapp.com"><p>Listen and Talk App</p></a>
                    <a href="https://tomeu.herokuapp.com/"><p>Tomeu App</p></a>
                    <a href="https://luyezhan.github.io/Loveweb/"><p>Love App</p></a>
                    <a href="https://luyezhan.github.io/Code-Invader/"><p> Code Invader</p></a>     
                </div> 
                <Footer />
            </div>
        )
    }
}

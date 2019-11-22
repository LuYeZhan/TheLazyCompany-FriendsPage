import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default class Home extends Component {
    render() {
        return (
            <div>
            <h2 className="logo">The Lazy company and friends</h2>
            <video id="hooli-video" playsinliNe="true" autoplay="" muted="true" loop="true" buffered=""> 
            {/* <source src="./videos/Hoolisubsenglish.mov" type="video/mp4"/>   */}
            <source src="https://www.shackletongroup.com//assets/app/video/shck-background-intro-v1.webm" type="video/webm"/>
            </video>
                <Navbar />
                <h1 className = "flex center">Home Page</h1>
                <div className= "flex container">
                    <a className="cards" href="https://listenandtalk-a3074.firebaseapp.com"><h3>Listen and Talk App</h3>
                    <p>A Social Network based on audio in 9 days, using React, Express, Node.js and MongoDB.</p>
                    </a>
                    <a className="cards" href="https://tomeu.herokuapp.com/"><h3>Tomeu App</h3>
                    <p>Use of Express and Node.js to create an app web marketplace for homemade food experiences. Created in 7 days.</p></a>
                    <a className="cards" href="https://luyezhan.github.io/Loveweb/"><h3>Love App</h3><p>Use of object oriented programing to create a social app to find your soul mate using external API. Created in 3 days.</p></a>
                    <a className="cards" href="https://luyezhan.github.io/Code-Invader/"><h3> Code Invader</h3><p>Creation of a Web/App Game like space invader with Javascript DOM, and CSS. Created in 4 days.</p></a>
                    <a className="cards" href="https://kiwi-me.firebaseapp.com/"><h3> Kiwi'em</h3><p>Creation of a Omega-lol app MERN stack + SAAS + socket.io + Gsap</p></a>        
                </div>   
                <Footer />
            </div>
        )
    }
}

import React from "react";
import './home.css'
import { Fade } from "react-reveal";
import {Link} from 'react-scroll'

const Home = () => {
    return(
        <div className="home__container">
            <Fade left>
                <div className="home__container-text">
                    <h2 className="home__container-text-top">Hi, I'm 
                    <span className="gradient"> Berman.</span></h2>
                    <h2 className="home__container-text-bottom">I'm a guy who likes to code.</h2>
                </div>
            </Fade>
            <Fade bottom>
                <div className="home__container-navbar">
                    <Link to="about" spy={true} smooth={true} offset={0} duration={500} className="options">About</Link>
                    <Link to="projects" spy={true} smooth={true} offset={0} duration={500} className="options">Projects</Link>
                    <Link to="resume" spy={true} smooth={true} offset={-100} duration={500} className="options">Resume</Link>
                </div>
            </Fade>
            <div className="home__container-waste"></div>
        </div>
    )
}

export default Home;
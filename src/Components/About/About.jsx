import React from "react";
import './about.css'

import Fade from "react-reveal/Fade"

const About = () => {
    return(
        <div className="about__container" id="about">
            <div className="about__container-information">
                <div className="about__container-header">
                    <Fade top>
                        <h1>About</h1>
                    </Fade>
                </div>
                <div className="Inside">
                    <div className="about__container-picture">
                        <Fade left>
                            <img className="picture" src="https://i.ibb.co/gyC72Nx/About.png"/>
                            <p>(No, this isn't me)</p>
                        </Fade>
                    </div>
                    <Fade right>
                        <div className="about__container-text">
                            <p>I started learning about computers and how to code 5 years ago. I started out learning Python in high school as a class I just took to fill in my schedule. After learning the very basics of Python I realized what is possible to do with coding and it made my head spin...but I loved it!</p>
                            <p>After passing that class and loving it, I took a class on Java and C++ the next few years. I ended up doing freelance work throughout high school making people Python apps. I was planning on becoming a network analyst as my career, I wanted to do that because I figured since I love coding, I don't want to get tired of it by doing it everyday.</p>
                            <p>Recently I realized I already do code almost everyday and decided I should just start doing it for my job anyways. So here I am today!</p>
                            <div className="about__container-waste"></div>
                        </div>
                    </Fade>
                </div>
            </div>
            
        </div>
    )
}


export default About;
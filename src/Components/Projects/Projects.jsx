import React from "react";
import "./projects.css"
import { Fade } from "react-reveal";

const Indiv1 = (props) => {
    return(
        <>
            <div className="projects__container-card">
                <div className="projects__container-information">
                    <Fade left>
                    <div className="projects__container-card-title">
                        <h2>{props.name}</h2>
                    </div>
                    </Fade>
                    <Fade bottom>
                    <div className="projects__container-card-text">
                        <p>{props.desc}</p>
                    </div>
                    
                    <div className="link">
                        <div className="projects__container-card-link">
                            <a href={props.github}>Link to Source Code</a>
                        </div>
                            <div className="GithubIMG">
                        <img className="IMG" src="https://i.ibb.co/C1SMGvj/Octicons-mark-github-svg.png"/>
                        </div>
                    </div>
                    </Fade>
                </div>
                <Fade right>
                <div className="projects__container-card-picture">
                    <img className="picture1" src={props.img}/>
                </div>
                </Fade>

            </div>
        </>
    )
};


const Projects = () => {
    return(
        <div className="projects__container" id="projects">
            <Fade top>
            <div className="projects__container-header">
                <h1>Projects</h1>
            </div>
            </Fade>
            <Indiv1 
                name={"MoviesMoviesMovies"} 
                desc={"Created this to use the IMDB api and get updated information on all of the movies/shows in their database."}
                github={'https://github.com/JerryIT1/MoviesWebsite'}
                img={'https://i.ibb.co/RgXqbVH/image-2023-06-09-173604458.png'}
            />
            <Indiv1 
                name={"Portfolio Website"}
                desc={"This was my first website I created 100% on my own using react. You are looking at it right now!"}
                github={"https://github.com/JerryIT1/portfolio"}
                img={'https://i.ibb.co/tmYJs62/image-2023-06-10-002249356.png'}
            
            
            />

        </div>
    )
};


export default Projects;
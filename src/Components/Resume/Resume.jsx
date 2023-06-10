import React from "react";
import './resume.css'
import Fade from 'react-reveal/Fade';

const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

class ResumeIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ show: !this.state.show });
  }
  render() {
    return (
        <>
        <div className="buttons__resume">
            <button
              className="resume__button"
              type="button"
              onClick={this.handleClick}
            >
              { this.state.show ? 'Hide' : 'Show' } Resume
            </button>

            <button onClick={() => openInNewTab('https://drive.google.com/file/d/1k5bLgSyfI9pPOnpZ5fqM_NRZd5Nnk28F/view?usp=drive_link')} className="resume__button">
                Open in New Tab
            </button>
        </div>
        
      <div className="resume-folder">
        <Fade left opposite collapse when={this.state.show}>
            <img src="https://i.ibb.co/Kj9dp9Z/Berman-Nowlin-1-1.png" className="Resume-img"/>
        </Fade>
        
      </div>
      </>
    );
  }
}

const Resume = () => {
    return(
        <div className="resume__container" id="resume">
            <div className="resume__container-header">
                <h1>Resume</h1>
                <ResumeIn />
            </div>
            
        </div>
    )
}


export default Resume;
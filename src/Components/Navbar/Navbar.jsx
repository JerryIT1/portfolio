import React from "react";

import './navbar.css'

const Navbar = () => {
    return(
        <div className="navbar__container">
    {/*        <div className="navbar__container-logo">
                    <h1>Portfolio</h1>
                </div> */}
            <div className="navbar__container-links">
                <a href="https://www.linkedin.com/in/berman-nowlin-15b9791b3/" target="_blank" rel="noopener noref"><img src='https://i.ibb.co/25L4rPP/Linked-In-After.png'/></a>
                <a href="https://github.com/JerryIT1" target="_blank" rel="noopener noref"><img src='https://i.ibb.co/zXrnHRF/Github-After.png'/></a>
                

            </div>
            
        </div>
    )
}


export default Navbar;
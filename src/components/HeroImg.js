import "./HeroImgStyles.css";
import React from 'react'
import IntroImg from "../assets/IntroImg.gif"
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" src={IntroImg} alt="IntroImg"/>
        </div>
        <div className="content">
            <p className="up" style={{color:"white"}}>HI, I'M FALGUNI SHRIVASTAV</p>
             <div className="slidingVertical">
              <span >Newbie Coder<br/>
              Web Enthusiast<br/>
              Musicophile<br/>
              Guitarist<br/>
              Sightseer<br/>
              </span>
              </div>
            <p className="down" style={{color:"white"}}>An IT undergrad at NIT RAIPUR</p>
            <div className="links">
                <Link to="/skills" className="btn">Skills</Link>
                <Link to="/contact" className="btn btn-light">Contact</Link>
            </div>
            </div>
        </div>
  )
}

export default HeroImg
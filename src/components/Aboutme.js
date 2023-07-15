
import "./AboutmeStyles.css";
import MyImg from "../assets/my-pic.jpg"
import { ThemeContext } from "../context/themecontext"
import React from 'react'
import { useContext } from "react";

const Aboutme = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <div className="main">
        <div className="image">
        <img className="myimage" src={MyImg} alt="MyImg"/>
        </div>
        <div className="description">
          <h1>About me</h1>
          {/* <div className="typewriter">
            <h3>Consistency is the foundation of virtuee</h3>
          </div> */}
          <p class="bio">I am currently persuing my Bachelor's degree in Information Technology
            from National Institute of Technology , Raipur and I'll be graduating in 2025.
            <br/>
            I started learning C++ as a programming language in first semester . I had a keen
            interest in solving problems and hence I started with hackerrank and consequently
            shifted to leetcode and gfg for further practice. I have solved upto 1000+ problems on
            DSA till now and participated in several contests. I was also awarded as a Diva winner in one of the
            coding contests held in our college.
           <br/>
            I have knowledge of devlopment languages like Javascript and React and have made projects using them. I started
            with basic HTML and then learned CSS for static websites. Then I switched to Javascript 
            and React.
          </p>
        </div>
    </div>
  )
}

export default Aboutme
import React, { useContext } from 'react'
import './skillStyles.css'
import C from '../assets/c++.png'
import Html from '../assets/html.png'
import Css from '../assets/css.png'
import JS from '../assets/js.png'
import reactt from '../assets/react.png'
import v1 from "../assets/v1.mp4"
import v2 from "../assets/v2.mp4"
import { ThemeContext, themes} from '../context/themecontext'
import v21 from "../assets/v21.mp4"


const Skill = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <div className='temp1'>
        <h1 className='ski' style={{color:theme===themes.dark?"white":"black"}}>Skills And Projects
            </h1>
    <div className='maincontainer'>
        <div className='sleft'>
             <h3 className='head'>Programming Languages</h3>
           <div className='image-con'>
           <img className="im" src={C} alt="logo"/>
           <img className="im" src={Html} alt="logo"/>
           <img className="im" src={Css} alt="logo"/>
           <img className="im" src={JS} alt="logo"/>
           <img className="im" src={reactt} alt="logo"/>
           </div>
        </div>
        <div className='sright'>
           <h3 className='tail'>Projects</h3>
            <div className='project-sec'>
              <div className='divi'>
                <video className='v11' src={v1} autoPlay loop muted />         
                <p className='tech'><a href="https://falguni300103.github.io/Action-Game/">Action Game</a></p>
                </div>
                <div className='divi'>
                <video className='v12' src={v2} autoPlay loop muted />         
                
                <p className='tech'><a href="https://falguni300103.github.io/Snake-Game/">Snake Game</a></p>
                </div>
                <div className='divi'>
                <video className='v21' src={v21} autoPlay loop muted />         
                  <p className='tech'>< a href=''>Portfolio Website</a></p>
                  </div>
                 
        </div>
    </div>
    </div>
    <div className='link'>
    <button className='btnn'><a className="linking" href="https://flowcv.com/resume/8e58bpssod">View Resume</a></button>
    </div>
    </div>
  )
}

export default Skill
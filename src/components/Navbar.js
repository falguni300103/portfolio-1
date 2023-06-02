import { Link } from "react-router-dom"
import "./NavbarStyles.css"

import React, { useContext, useState } from 'react'

import {FaBars, FaTimes} from "react-icons/fa";
import Posts from "./Posts";
import { ThemeContext ,themes} from "../context/themecontext";

const Navbar = () => {
    const {theme} = useContext(ThemeContext);

    const[click,setClick]=useState(false);
    const handleClick = () => setClick(!click);

    const[color,setColor] = useState(false);
    const changeColor = () =>{
        if(window.scrollY>=100){
            setColor(true);
        }else{
            setColor(false);
        }
    };

    window.addEventListener("scroll",changeColor);


  return (
    <div className={color?"header header-bg":"header"}>
        <Link to="/">
            <h1 style={{color:theme===themes.dark?"white":"grey"}}>Portfolio</h1>
        </Link>
        <ul className={click?"nav-menu active":"nav-menu"}>
            <li>
                <Link to="/"><div style={{color:theme===themes.dark?"white":"grey"}}>Home</div></Link>
            </li>
            <li>
                <Link to="/about"><div style={{color:theme===themes.dark?"white":"grey"}}>About</div></Link>
            </li>
            <li>
                <Link to="/education"><div style={{color:theme===themes.dark?"white":"grey"}}>Education</div></Link>
            </li>
            <li>
                <Link to="/skills"><div style={{color:theme===themes.dark?"white":"grey"}}>Skills</div></Link>
            </li>
            <li>
                <Link to="/contact"><div style={{color:theme===themes.dark?"white":"grey"}}>Contact</div></Link>
            </li>
            <li style={{padding:"0"}}>
            <Posts/>
            </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
            {click ? (
                <FaTimes size={20} style={{color:"#fff"}}/>
            ):(
                <FaBars size={20} style={{color:"#fff"}}/>
            )}
        
        </div>
    </div>
  )
}

export default Navbar
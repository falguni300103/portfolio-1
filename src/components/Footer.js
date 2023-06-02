import "./FooterStyles.css"

import React, { useContext } from 'react'
import { FaGithub, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa"
import { ThemeContext, themes} from '../context/themecontext'

const Footer = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <div className="footer" >
        <div className="footer-container" style={{color:theme===themes.dark?"white":"black"}}>
            <div className="left">
              <div className="location">
                 <FaHome size={20} style={{color:"#fff", marginRight : "2rem"}}/>
                 <div>
                    <p>Hostel-G Indrawati,</p>
                    <p>Raipur.</p>
                 </div>
              </div>
              <div className="phone">
                <h4>
              <FaPhone size={20} style={{color:"#fff", marginRight : "2rem"}}/>
              +91 7224004087
              </h4>
              </div>
              <div className="email">
              <h4>
              <FaMailBulk size={20} style={{color:"#fff", marginRight : "2rem"}}/>
              falgunishrivastav9822@gmail.com
              </h4>
              </div>
            </div>


            <div className="right">
            <h4>You can connect to me through the following social media</h4>
            <div className="social">
            <FaLinkedin size={30} style={{color:"#fff", marginRight : "1rem"}}/>
            <FaInstagram size={30} style={{color:"#fff", marginRight : "1rem"}}/>
            <FaGithub size={30} style={{color:"#fff", marginRight : "1rem"}}/>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
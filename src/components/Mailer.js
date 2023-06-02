import emailjs from "emailjs-com"
import "./MailerStyles.css";
import contactbg from "../assets/contactbg.webp"
import { ThemeContext, themes} from '../context/themecontext'
import { useContext } from "react";
const Mailer =()=>{
  const {theme} = useContext(ThemeContext);
  function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm("service_96z07ae","template_fhctnba",e.target,"REtHI7hymCWBZ7lnh").then(res=>{
      console.log(res);
    }).catch(err=>console.log(err));
  }
  return (
    <div className="containerborder">
      <img src={contactbg} className="picss"></img>
      <h1 style={{color:theme===themes.dark?"white":"black"}}>Feedback Form</h1>
      <form className="f1" onSubmit={sendEmail}>
        <label className="heading" style={{color:theme===themes.dark?"white":"black"}}>name</label>
        <input type="text" name="name" className="entry" style={{backgroundColor:theme===themes.light?"grey":"black"}}/>

        <label className="heading" style={{color:theme===themes.dark?"white":"black"}}>Email</label>
        <input type="email" name="user_email" className="entry" style={{backgroundColor:theme===themes.light?"grey":"black"}}/>

        <label className="heading" style={{color:theme===themes.dark?"white":"black"}}>Message</label>
        <textarea name="message" className="entry" style={{backgroundColor:theme===themes.light?"grey":"black"}}/>
       <button className="submit" >Send</button>
        
      </form>
      </div>
  );
};

export default Mailer;
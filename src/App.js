import React ,{useEffect,useState} from 'react';
import "./index.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Education from "./routes/Education";
import Skills from "./routes/Skills";
import Contact from "./routes/Contact";
import { Route, Routes } from "react-router-dom";
import { ThemeContext, themes } from "../src/context/themecontext"
import Posts from './components/Posts';
 
function App() {
  const [theme, setTheme] = useState(themes.dark);

  //btn
  function handleOnClick() {
    theme === themes.light ? setTheme(themes.dark) : setTheme(themes.light);
  }

  const body = document.body;
  useEffect(() => {
    switch (theme) {
      case themes.light:
        body.classList.remove("bg-dark");
        body.classList.remove("text-light");
        body.classList.add("bg-light");
        body.classList.add("text-dark");
        break;
      case themes.dark:
        body.classList.remove("bg-light");
        body.classList.remove("text-dark");
        body.classList.add("bg-dark");
        body.classList.add("text-light");
        break;
      default:
        body.classList.remove("bg-dark");
        body.classList.remove("text-light");
        body.classList.add("bg-light");
        body.classList.add("text-dark");
    }
  }, [theme]);

  return (
    
    <>
      <ThemeContext.Provider value={{ theme, handleOnClick }}>
    <Routes>
      <Route path = "/portfolio-1" element = {<Home/>} />
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/education" element={<Education/>} />
      <Route path="/skills" element={<Skills/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/Toggle" element={<Posts/>}/>
    </Routes>
    </ThemeContext.Provider>
    </>
  );
}

export default App;

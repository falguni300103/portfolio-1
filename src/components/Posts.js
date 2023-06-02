import React, { useContext } from "react";
import { ThemeContext } from "../../src/context/themecontext"
const Posts = () => {
  const { theme, handleOnClick } = useContext(ThemeContext);
  return (
    <div>
      <button
        className={`btn ${theme === "dark" ? "btn-light" : "btn-dark"} border`} style={{backgroundColor:theme==="dark"?"white":"black",color:theme==="dark"?"grey":"white"}}
        onClick={handleOnClick}
      >
        {theme === "dark" ? "light" : "dark"}
      </button>
    </div>
  );
};

export default Posts;
import React, { useState } from "react";
import './App.css';
import Comp from "./components/Comp";
import Header from "./components/Header";


function App() {
    const [dark, darkTheme] = useState(false)
    return (
      <div className="App">
        <Header dark={dark} darkTheme={darkTheme}/>
        <Comp dark={dark} text1="The WET Codbase" text2="Sunday 4th, 2023 11 min read" text3="Come waste your time with me"/>
        <Comp dark={dark} text1="Goodby, Clean Code" text2="Friday 22nd, 2023 5 min read" text3="Let clean code guide you. Then let it go."/>
        <Comp dark={dark} text1="My Decade In Review" text2="Saturday 11th,2023 5 min read" text3="A Personal reflection."/>
        <Comp dark={dark} text1="What Are The React Team Principles" text2="Thursday 4th,2023 5 min read" text3="A Personal reflection."/>     
      </div>
    );
  }
  
  export default App;
  
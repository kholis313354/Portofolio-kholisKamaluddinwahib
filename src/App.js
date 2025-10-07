import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import PacmanLoader from "react-spinners/PacmanLoader";
import "animate.css/animate.min.css";
import { useState } from "react";



function App() {

  const [loading, setLoading] = React.useState(false)
  const [theme,setTheme] = useState(false)

  const lightChange = () => {
    // alert("Theme changed :- Press Ok To Proceed");
    setTheme(prev =>  prev = !prev) 
  
 }

  React.useEffect(() => {
    setLoading(true)
    setTimeout(() => {
         setLoading(false)
    },4000)

  },[])
  
  return ( 
    <div className= "flex items-center justify-center min-h-screen overflow-hidden w-full bg-[#0a192f]">
     {loading ?   
      <div className="flex flex-col items-center justify-center space-y-4">
        <PacmanLoader 
          color={"#ffa500"}
          loading={loading}
          size={60}
          speedMultiplier={1}
        />
        <div className="text-white text-xl font-bold animate-pulse">
          Loading Portfolio...
        </div>
        <div className="text-yellow-400 text-sm animate-bounce">
          🎮 Kholis.dev
        </div>
      </div>
    :
    <div>
        <Navbar  theme={theme} lightChange ={lightChange}/>
        <Main  theme={theme}  />
        <About  theme={theme} />
        <Skills  theme={theme}/>
        <Work  theme={theme} />
        <Contact  theme={theme} />
    </div> }
 
</div>
  );
}

export default App;

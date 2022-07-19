import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Cards from "./components/Cards";
import Top from "./components/Top";


const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Cards/>
      <Top/>
    </div>
  );
}

export default App;
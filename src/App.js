import React, { useEffect } from "react";
import Navbar from "./Component/Navbar/Navbar";
import {original,drama} from './urls'
import "./App.css";
import Banner from "./Component/Banner/Banner";
import RowPost from "./Component/RowPost/RowPost";

function App() {
  useEffect(()=>{

  },[])

  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <RowPost url={original} title='Netflix Originals'/>
      <RowPost url={drama} title='Drama' isSmall/>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Submenu from './components/Submenu'
import "./App.css";

function App() {
  return <>
    <Navbar/>
    <Hero/>
    <Sidebar/>
    <Submenu/>
  </>;
}

export default App;

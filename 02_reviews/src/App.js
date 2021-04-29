import React, { useState, useEffect } from "react";
import Review from './components/Review';
import "./App.css";

function App() {

  return <main> 
   <section className="container">
     <div className="title">
       <h2>reviews</h2>
       <div className="underline"></div>
     </div>
     <Review/>
     </section> 
    </main>;
}

export default App;

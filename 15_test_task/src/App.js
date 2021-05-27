import React from "react";
import "./App.css";
import Banner from "./components/banner/Banner";
import ContactForm from "./components/contactForm/ContactForm";
import Services from "./components/services/Services";
import Slider from "./components/slider/Slider";

function App() {
  return (
    <main>
      <Services />
      <Banner/>
      <Slider/>
      <ContactForm/>
    </main>
  );
}

export default App;

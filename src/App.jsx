import { useState } from "react";
import './App.css'
 
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills"
import Services from "./components/Services/Services";
import Portfolio from "./components/Portfolio/Portfolio";
import Number from "./components/Number/Number";
import Contact from "./components/Contact/Contact";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import AnimatedCursor from "react-animated-cursor";
 
 
function App() {
  const [count, setCount] = useState(0);
 
  return (
    <div className="App">
      <AnimatedCursor
        innerSize={8}
        outerSize={8}
        color='0, 65, 125'
        outerAlpha={0.2}
        innerScale={1.5}
        outerScale={5}
        outerStyle={{
          border: "3px solid #fff",
        }}
        clickables={[
          "a",
          'inpit[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="summit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",  
        ]}
      />
      <Navbar/>
      <Hero/>
      <Skills/>
      <Services/>
      <Portfolio/>
      <Number/>
      <Testimonials/>  
      <Contact/>
      <Footer/>
    </div>
  );
}
 
export default App;
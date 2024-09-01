import "./App.css";
import { Routes, Route } from "react-router-dom";
import Intro from "./pages/Intro";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Package from "./pages/Package";
import Experience from "./pages/Experience";
import Coming from "./pages/Coming";
import LandingPage from "./pages/LandingPage";
import Layout from "./Layout";
import Projects from "./pages/Projects";
import NewProjects from "./pages/NewProjects";
import React, { useEffect } from 'react';
import $ from "jquery"; 

function App() {
  
  useEffect(() => {
    const loadJs = (path) => {
      if (!document.querySelector(`script[src="${path}"]`)) {
        let script = document.createElement('script');
        script.src = path;
        script.async = true;
        document.body.appendChild(script);
        return () => {
          document.body.removeChild(script);
        }
      }
    }
  
    //loadJs('https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js');
    //loadJs('https://ricostacruz.com/jquery.transit/jquery.transit.min.js');
    //loadJs(`http://localhost:5173/public/assets/custom.js`);

  }, []);
  
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Intro />} />
        <Route path="/home" element={<Layout />}>
          <Route index element={<LandingPage />} />
        </Route>
        <Route path="/about" element={<Layout />}>
          <Route index element={<About />} />
        </Route>
        <Route path="/experience" element={<Layout />}>
          <Route index element={<Coming />} />
        </Route>
        <Route path="/projects" element={<Layout />}>
          <Route index element={<Projects />} />
        </Route>
        <Route path="/contact" element={<Layout />}>
          <Route index element={<Contact />} />
        </Route>
        <Route path="/package" element={<Layout />}>
          <Route index element={<Package />} />
        </Route>
        
         <Route path="/new-projects" element={<Layout />}>
          <Route index element={<NewProjects />} />
        </Route>
        
        
      </Routes>
    </div>
  );
}

export default App;

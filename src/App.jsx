import { Routes, Route } from "react-router-dom";
import "./App.css";

import  Home  from "./pages/Home";
import { About } from "./pages/About";
import { Project } from "./pages/Project";
import {Contact} from "./pages/Contact";
import { Workexp } from "./pages/Workexp";
import { Headers } from "./Components/Header";
import { Footer } from "./Components/Footer";

const App = () => {
  return (
    <div>
      <Headers />
      <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/workexp" element={<Workexp />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

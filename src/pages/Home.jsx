import { Contact } from "./Contact";
import { Herosection } from "../Components/Herosection";
import { About } from "./About";
import { Project } from "./Project";
import {Workexp }from "./Workexp";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Herosection />
      <About/>
      <Project/>
      <Workexp/>
      <Contact/>
      
    </div>
  );
};

export default Home;

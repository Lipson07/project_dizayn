import Header from "./components/header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import "./style/header.scss";
import "./style/main.scss";
import "./style/footer.scss";
import { Routes, Route } from "react-router";
import Projectscards from "./components/projectpage/Projectscards";
import pr1 from "./assets/img/projcards/pr1.png"
import pr2 from "./assets/img/projcards/pr2.png"
import pr3 from "./assets/img/Property 1=home2.png"
import pr4 from "./assets/img/Property 1=home3.png"
import pr5 from "./assets/img/Property 1=home4.png"
import pr6 from "./assets/img/Property 1=home6.png"
import pr7 from "./assets/img/Property 1=home5.png"
import pr8 from "./assets/img/home1.png"
import plan1_1 from "./assets/img/projcards/plan1_1.png"
import plan2_1 from "./assets/img/projcards/plan2_1.png"
import plan1_2 from "./assets/img/projcards/plan1_2.png"
import plan2_2 from "./assets/img/projcards/plan2_2.png"
import pl1e_3p from "./assets/img/projcards/pll1e_3p.png"
import pl2e_3p from "./assets/img/projcards/pl2e_3p.png"
import pl1e_4p from "./assets/img/projcards/pl1e_4p.png"
import pl2e_4p from "./assets/img/projcards/pl2e_4p.png"
import pl1e_5p from "./assets/img/projcards/pl1e_5p.png"
import pl1e_6p from "./assets/img/projcards/pl1e_6p.png"
import pl2e_6p from "./assets/img/projcards/pl2e_6p.png"
import pl1e_7p from "./assets/img/projcards/pl1e_7p.png"
import pl2e_7p from "./assets/img/projcards/pl2e_7p.png"
import pl1e_8p from "./assets/img/projcards/ple1_8p.png"
import pl2e_8p from "./assets/img/projcards/pl2e_8p.png"

import { useState } from "react";
function App() {
  const [black,setblack]=useState(0)
  const white="white"
  const black1="#232323"

  return (
   <div> {
      black === 0 ?
    <>
      <Header black={black} setblack={setblack} fon={black1}  />
      <Routes>
        <Route path="/" element={<Home black={black}/>} />
        <Route path="/Projects" element={<Projects black={black} />} />
        <Route path="/projects/0" element={<Projectscards osnimage={pr1} schema1={plan1_1} schema2={plan2_1} page={1} black={black} />} />
        <Route path="/projects/1" element={<Projectscards osnimage={pr2} schema1={plan2_2} schema2={plan1_2} page={1} black={black}/>} />
        <Route path="/projects/2" element={<Projectscards osnimage={pr3} schema1={pl1e_3p} schema2={pl2e_3p} page={1} black={black} />} />
        <Route path="/projects/3" element={<Projectscards osnimage={pr4} schema1={pl1e_4p} schema2={pl2e_4p} page={1}  black={black}/>} />
        <Route path="/projects/4" element={<Projectscards osnimage={pr5} schema1={pl1e_5p} page={0}  black={black}/>} />
        <Route path="/projects/5" element={<Projectscards osnimage={pr6} schema1={pl1e_6p} schema2={pl2e_6p} page={1}  black={black}/>} />
        <Route path="/projects/6" element={<Projectscards osnimage={pr7} schema1={pl1e_7p} schema2={pl2e_7p} page={1}  black={black}/>} />
        <Route path="/projects/7" element={<Projectscards osnimage={pr8} schema1={pl1e_8p} schema2={pl2e_8p} page={1}  black={black}/>} />
   
        <Route path="/about" element={<About black={black}S />} />
        <Route path="/Contacts" element={<Contacts black={black} />} />
      </Routes>
      <Footer  black={black} fon={black1}/>
    </>

    :<>
        <Header black={black} setblack={setblack} fon={white} />
      <Routes>
        <Route path="/" element={<Home fon={white} black={black}/>} />
        <Route path="/Projects" element={<Projects black={black} />} />
        <Route path="/projects/0" element={<Projectscards osnimage={pr1} schema1={plan1_1} schema2={plan2_1} page={1} black={black} />} />
        <Route path="/projects/1" element={<Projectscards osnimage={pr2} schema1={plan2_2} schema2={plan1_2} page={1} black={black}/>} />
        <Route path="/projects/2" element={<Projectscards osnimage={pr3} schema1={pl1e_3p} schema2={pl2e_3p} page={1} black={black} />} />
        <Route path="/projects/3" element={<Projectscards osnimage={pr4} schema1={pl1e_4p} schema2={pl2e_4p} page={1}  black={black}/>} />
        <Route path="/projects/4" element={<Projectscards osnimage={pr5} schema1={pl1e_5p} page={0}  black={black}/> } />
        <Route path="/projects/5" element={<Projectscards osnimage={pr6} schema1={pl1e_6p} schema2={pl2e_6p} page={1}  black={black}/>} />
        <Route path="/projects/6" element={<Projectscards osnimage={pr7} schema1={pl1e_7p} schema2={pl2e_7p} page={1}  black={black}/>} />
        <Route path="/projects/7" element={<Projectscards osnimage={pr8} schema1={pl1e_8p} schema2={pl2e_8p} page={1}  black={black}/>} />
   
        <Route path="/about" element={<About black={black}/>} />
        <Route path="/Contacts" element={<Contacts black={black}/>} />
      </Routes>
      <Footer black={black} fon={white}/>
    
    
    
    
    
    
    
    
    </>
   }</div>    
   
  );
}

export default App;

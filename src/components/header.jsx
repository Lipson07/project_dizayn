import { Link } from 'react-router';
import  { useState, useRef, useEffect } from 'react';
import React from 'react'
import logodark from "../assets/img/logodark.svg"
import logowhite from "../assets/img/logolight.svg"
import linedark from '../assets/img/Line 1.svg'
import smenatemisun from '../assets/img/Vector_11.svg'
import linelight from '../assets/img/Line2.png'
import luna from '../assets/img/luna.png'
import zv from '../assets/img/zv.png'
import zv1 from '../assets/img/zv1.png'
function Header({black,setblack,fon}) {
    const[line,setline]=React.useState(0)
    const [activ1,setactiv1]=React.useState("active")
   
      const [zvClass, setZvClass] = useState("zv da");
      const [zv1Class, setZv1Class] = useState("zv1 da");
      const timeouts = useRef([]);
    
      useEffect(() => {
        return () => {
          
          clearTimeouts();
        };
      }, []);
    
      const clearTimeouts = () => {
        timeouts.current.forEach(timeout => clearTimeout(timeout));
        timeouts.current = [];
      };
    
    
      const handleHover = () => {
        clearTimeouts();
    
        timeouts.current.push(setTimeout(() => {
          setZvClass("zv");
        }, 2000));
    
        timeouts.current.push(setTimeout(() => {
          setZv1Class("zv1");
          setZvClass("zv da");
        }, 4000));
    
        timeouts.current.push(setTimeout(() => {
          setZvClass("zv");
          setZv1Class("zv1");
        }, 6000));
      };
    
      const resetClasses = () => {
        clearTimeouts();
        setZvClass("zv da");
        setZv1Class("zv1 da");
      };

    
 
    return (

        <header>
        <div className="backhead" style={{backgroundColor:fon}}></div>
      <div className="headersod"><img alt="logo" src={black==1?logowhite:logodark}  className="cont imgheader"/>
          <img className="linehead" src={black==1?linelight:linedark} />
      
      <div className="header-cont" >    
                <Link to="/" onClick={()=>setline(0)} className={line==0?activ1:"" }><h3 className={black==1?"cont1":"cont"}>Главная</h3></Link>
               <Link to="/projects"  onClick={()=>setline(1)} className={line==1?activ1:"" }> <h3 className={black==1?"cont1":"cont"}>Проекты</h3></Link>
                <Link to="/about" onClick={()=>setline(2)} className={line==2?activ1:"" } ><h3 className={black==1?"cont1":"cont"}>О нас</h3></Link>
               <Link to="/Contacts" onClick={()=>setline(3)} className={line==3?activ1:"" }> <h3 className={black==1?"cont1":"cont"}>Контакты</h3></Link>
        
      </div>
     {
      black==0?<>
       <img className="smenatemi" alt="smenatemi" onClick={()=>{
       
       setblack(1)
          setactiv1("active1")

        
    
       
      }} src={smenatemisun} />
     
      
      </>:<><div className="lunadiv" alt="smenatemi"  onMouseOver={handleHover} onMouseOut={resetClasses} onClick={()=>{
       setblack(0)
       setactiv1("active")
       
      }} ><img className="luna" alt="smenatemi" src={luna} />
      <img id="zv" className={zvClass} alt="smenatemi" src={zv}  />
      <img id="zv1" className={zv1Class} alt="smenatemi" src={zv1} />
      
      
      
      </div>
      </>
     }
     </div> 
         </header>
    );
}

export default Header;
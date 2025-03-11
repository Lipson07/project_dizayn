import React from 'react'
import Slider from "../components/homepage/Slider";
import  Card from "../components/homepage/Card";
import home1 from "../assets/img/home1.png";

import home2 from "../assets/img/Property 1=home2.png";
import home3 from "../assets/img/Property 1=home3.png";
import home4 from "../assets/img/Property 1=home4.png";
import home5 from "../assets/img/Property 1=home5.png";
import home6 from "../assets/img/Property 1=home6.png";

const Home = ({fon,color,black}) => {
  const images=[home1,home2,home3,home4,home5,home6]
  return (
    <main className="main">
    <div className="rentg1" style={{backgroundColor:fon}}></div>
    <Slider images={images} />
    <div className="rentg" style={{backgroundColor:fon}}></div>
    <Card indexphoto={0} />
    <div className="rentg" style={{backgroundColor:fon}}>
      <h1 style={black==1?{color:"black"}:{color:"white"}}>ГАРАНТИРУЕМ НАДЕЖНОСТЬ</h1>
    </div>
    <Card indexphoto={1} black={black} />
  </main>
  )
}
export default Home

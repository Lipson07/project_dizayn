import home1 from "../assets/img/home1.png";
import React from "react";
import home2 from "../assets/img/Property 1=home2.png";
import home3 from "../assets/img/Property 1=home3.png";
import home4 from "../assets/img/Property 1=home4.png";
import home5 from "../assets/img/Property 1=home5.png";
import home6 from "../assets/img/Property 1=home6.png";
function Slider(){
    const images=[home1,home2,home3,home4,home5,home6]
    const [homeImage,seTHomeImage]=React.useState(0)

    setTimeout(() => {
        if(homeImage==images.length-1){
            seTHomeImage(0)
        }else if(homeImage<images.length&&homeImage!=images.length){
            seTHomeImage(homeImage+1)
        }
     
   
    },4000)
    return(<>
     
        <div className="slider"> 
         
         <div className="cardslider">   {images.map((home, index) => (
          <img
            key={index}
            className={homeImage == index ? "imgmain" : "imgmain2"}
            src={home}
            alt="1111"
          />
        ))}
         
        
         </div>
         </div>
         </>

    )
}
export default Slider
import React from 'react'
import cardpr from '../../style/proj.module.scss'
const Projectscards = ({osnimage,schema1,schema2,page,black}) => {
  return (
 <div className={cardpr.divcontainer}>
  <div className={black==1?cardpr.c3:cardpr.container1}>
    <div className={cardpr.blockh}></div>
    <img className={cardpr.osnimage} src={osnimage} alt="osnimage" />
  </div>
  <div className={black==1?cardpr.c3:cardpr.container2}>
    {
      page==0?<div className={black==1?cardpr.schemadiv1:cardpr.schemadiv}>
        <div>
        <h1>Этаж1</h1>
        <img src={schema1} alt="schema1" />
        </div>

      </div>:<div className={black==1?cardpr.schemadiv1:cardpr.schemadiv}>
        <div>
        <h1>Этаж1</h1>
        <img src={schema1} alt="schema1" />


      </div>
      <div>
        <h1>Этаж2</h1>
        <img src={schema2} alt="schema2" />


      </div>

      </div>
    }




  </div>




 </div>
  )
}

export default Projectscards
import React, { useEffect } from 'react'
import about from '../style/about.module.scss'
import Container from '../components/Aboutpages/Container'
 const About = ({black}) => {

  return (
 
    <div className={black==1?about.about1:about.about}>
        <div className={about.container}>
        <Container black={black}/>
        </div>

    </div>
   
  )
}
export default About
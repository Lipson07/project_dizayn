import React from 'react'
import Project from "../style/proj.module.scss";
import Cardpr from "../components/projectpage/Cardpr";
const Projects = ({black}) => {
  return (
    <div className={black==1?Project.projects1:Project.projects}>
            <main className={Project.mainproj}>
            <Cardpr black={black}/>
            
               
            </main>



    </div>
  )
}
export default Projects
import React from 'react'
import './Projects.css'
import ProjectItem from '../ProjectItem/ProjectItem'
import {db} from "../../firebase"

import { set, ref, onValue, remove, update } from "firebase/database";
import { useState, useEffect } from "react";


function Projects() {

  const [project,setProject]=useState("");
  const [projects,setProjects]=useState([]);
    //read
    useEffect(() => {
      console.log("runned");

      onValue(ref(db,"/Portfolio/Projects/"), (snapshot) => {
        setProjects([]);
        const data = snapshot.val();
        console.log(data);
        if (data !== null) {
          Object.values(data).map((project) => {
            setProjects((oldArray) => [...oldArray, project]);
          });
        }
      });
    }, []);
  return (
    <section id='projects'>
        <span className='projectTItle'>Projects</span>
        <div className='projectGallery'>
          {projects.map((project)=>(
            <ProjectItem pName= {project.pName} 
    pImg= {project.pImg}
    pDesc= {project.pDesc}
    pLive= {project.pLive}
    pSource= {project.pSource}/>

          ))}
            {/* <ProjectItem/>
            <ProjectItem/>
            <ProjectItem/>
            <ProjectItem/>
            <ProjectItem/> */}
        </div>
        
    </section>
  )
}

export default Projects
import React from "react";
import "./Projects.css";
import ProjectItem from "../ProjectItem/ProjectItem";
import { db } from "../../firebase";

import { set, ref, onValue, remove, update } from "firebase/database";
import { useState, useEffect } from "react";
import axios from "axios";

function Projects() {
  const [project, setProject] = useState("");
  const [projects, setProjects] = useState([]);
  //read
  useEffect(() => {
    console.log("runned");

    // onValue(ref(db, "/Portfolio/Projects/"), (snapshot) => {
    //   setProjects([]);
    //   const data = snapshot.val();
      
    //   console.log(data);
    //   if (data !== null) {
    //     Object.values(data).map((project) => {
          
    //       setProjects((oldArray) => [...oldArray, project]);
    //     });
    //   }
    // });

    axios.get("https://api.github.com/users/shendew/repos")
    .then((response)=>{
      console.log(response.data)

      setProjects(response.data);
    })
  }, []);
  return (
    <section id="projects">
      <span className="projectTItle">Projects</span>
      <div className="projectGallery">
        {projects.map((project) => (
          !project.private?
          <ProjectItem
            pName={project.name}
            pImg={"project.pImg"}
            pDesc={project.description}
            pLive={project.html_url}
            pSource={"project.pSource"}
            // pName={project.pName}
            // pImg={project.pImg}
            // pDesc={project.pDesc}
            // pLive={project.pLive}
            // pSource={project.pSource}
          />:<></>
        ))}
        {/* <ProjectItem/>
            <ProjectItem/>
            <ProjectItem/>
            <ProjectItem/>
            <ProjectItem/> */}
      </div>
    </section>
  );
}

export default Projects;

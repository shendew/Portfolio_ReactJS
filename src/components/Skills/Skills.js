import React from 'react'
import './Skills.css'
import SkillItem from '../SkillItem/SkillItem'

import ProjectItem from '../ProjectItem/ProjectItem'
import {db} from "../../firebase"

import { set, ref, onValue, remove, update } from "firebase/database";
import { useState, useEffect } from "react";

import java from '../../img/skillItems/java.png';
import php from '../../img/skillItems/php.png';
import physics from '../../img/skillItems/physics.png';
import sqlserver from '../../img/skillItems/sql-server.png';


function Skills() {
  const [skills,setSkills] =useState([]);
  //read
  useEffect(() => {
    console.log("runned");
    

    onValue(ref(db,"/Portfolio/Skills/"), (snapshot) => {
      setSkills([]);
      const data = snapshot.val();
      console.log(data);
      if (data !== null) {
        Object.values(data).map((skill) => {
          setSkills((oldArray) => [...oldArray, skill]);
        });
      }
    });
  }, []);
  return (
    <section id='skills'>
        <span className='skillTItle'>My Skills</span>
        <div className='skillGallery'>
          {
            skills.map((skill)=>(
              <SkillItem 
                SkillItemID={skill.SkillItemID} 
                SkillItemName={skill.SkillItemName} 
                SkillItemLogo={skill.SkillItemLogo}/>
            ))
          }
           
        
        </div>
        
    </section>
  )
}

export default Skills
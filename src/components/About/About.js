import React from "react";
import "./About.css";
import { Link } from "react-scroll";
import me from "../../img/me.png";

function About() {
  return (
    <section id="about">
      <span className="aboutTItle">About me</span>

      <div className="aboutContainer">
        <img className="mypic" src={me} alt="" />

        <div className="abtext">
          <span className="type">Mobile and Web Developer</span>
          <p className="aboutP">
            I'm a Front-end web developer and Mobile application developer who
            is reading a BICT Dgree Program in Rajarata University of
            Sri-Lanka.I can provide clean code and pixel perfect design.I also
            make the website and mobile app more and more interactive with
            animations.A responsive design makes your website accessible to all
            users,regardss of their device.
          </p>
          <Link className="abLink">
            <button className="cv" onClick={(e) => {e.preventDefault(); window.open('http://thedevsl.com/Portfolio.pdf','_blank','noopener,noreferrer');
      }}> Download CV</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default About;

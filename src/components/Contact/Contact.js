import React, { useRef } from "react";
import "./Contact.css";
import TextField from "@mui/material/TextField";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHippo,
  faPhone,
  faEnvelope,
  faLocation,
} from "@fortawesome/free-solid-svg-icons";

import Liked from "../../img/lkd.png";
import Github from "../../img/github.png";
import Facebook from "../../img/facebook.png";
import Gmail from "../../img/gmail.png";


import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  // emailjs.send("service_3ix0aen","template_z4fzjn4",{
  //   name: "shehara",
  //   msg: "testing msg",
  //   email: "sahokavishka@gmail.com",
  //   phone: "0764247796",
  //   reply_to: "email",
  //   });

  const notify = () => toast("Message sent succesfully!");
  const notifyERR = () => toast("Message sent failed!");

  const sendEmail = (e) => {
    e.preventDefault();
    document.getElementById("submitBTN").setAttribute("disabled","disabled");

    emailjs
      .sendForm(
        "service_3ix0aen",
        "template_6htoaoe",
        form.current,
        "zSwxvjEeLgcvcbVTP"
      )
      .then(
        (result) => {
          notify();
        },
        (error) => {
          notifyERR();
        }
      );
  };

  return (
    <section id="contact">
      <span className="contactTItle">Let's talk</span>
      <span className="havesome">Have Some Question?</span>
      <p className="cdetail">
        Thank you for your interest in our services.Please fill out the form
        below or contact us with any social media platform and we will get back
        to you promty regarding your request.
      </p>

      <div className="contactContainer">
        <form className="form" ref={form} onSubmit={sendEmail}>
          <span className="ctus">Contact us</span>
          <input
            id="outlined-basic"
            placeholder="Name"
            name="from_name"
          />
          <input
            id="outlined-basic"
            placeholder="Phone"
            type="number"
            name="from_phone"
          />
          <input
            id="outlined-basic"
            placeholder="Email"
            type="email"
            name="from_email"
          />
          <textarea
            id="outlined-basic"
            placeholder="Type here.."
            name="message"
          />

          <input id="submitBTN" type="submit" className="contactSend" value="Send Message" />
        </form>
        <div className="socialsection">
          <span className="socialTitle th">Way to contact</span>
          <div className="number tt">
            <FontAwesomeIcon icon={faPhone} className="contactIcons" />{" "}
            <span>Phone : +94764247796</span>
          </div>
          <div className="email tt">
            <FontAwesomeIcon icon={faEnvelope} className="contactIcons" />
            <span>Email : dev.shehara@gmail.com</span>
          </div>
          <div className="location tt">
            <FontAwesomeIcon icon={faLocation} className="contactIcons" />
            <span>Location : Kegalle,Sri-Lanka</span>
          </div>
          <div className="socialIcons">
            <Link>
              <img src={Gmail} className="socialSingleIcons" onClick={(e) => {e.preventDefault(); window.open('dev.shehara@gmail.com','_blank','noopener,noreferrer');}}/>
            </Link>
            <Link>
              <img src={Github} className="socialSingleIcons" onClick={(e) => {e.preventDefault(); window.open('https://github.com/shendew','_blank','noopener,noreferrer');}}/>
            </Link>
            <Link>
              <img src={Liked} className="socialSingleIcons" onClick={(e) => {e.preventDefault(); window.open('https://www.linkedin.com/in/shehara-dewanagala-287857189/','_blank','noopener,noreferrer');}}/>
            </Link>
            <Link>
              <img src={Facebook} className="socialSingleIcons" onClick={(e) => {e.preventDefault(); window.open('http://thedevsl.com/Portfolio.pdf','_blank','noopener,noreferrer');}}/>
            </Link>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
}

export default Contact;

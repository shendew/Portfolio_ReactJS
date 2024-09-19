import React from "react";
import "./Confirm.css";
import ServiceItem from "../ServiceItem/ServiceItem";
import logo from "../../img/logo.png";
import { useLocation } from "react-router-dom";

export const Confirm = () => {
  const location = useLocation();
  const pack = location.state;

  return (
    <form className="confirmContainer">
      <div className="leftSide">
        <img src={logo} alt="logo" className="confirmBarLogo" />

        <span className="leftTitle">Confirm Order</span>
        <br></br>
        <div className="doubleInput">
          <div className="inputItem">
            <span className="inputBanner">First Name</span>
            <input className="inputText" type="text" placeholder="John" required/>
          </div>
          <div className="inputItem">
            <span className="inputBanner">First Name</span>
            <input className="inputText" type="text" placeholder="Doe" required/>
          </div>
        </div>
        <div className="inputItem">
          <span className="inputBanner">Email</span>
          <input
            className="inputText"
            type="email"
            placeholder="sample@mail.com"
            required
          />
        </div>
        <div className="doubleInput">
          <div className="inputItem">
            <span className="inputBanner">Phone</span>
            <input className="inputText" type="text" placeholder="07xxxx" required/>
          </div>
          <div className="inputItem">
            <span className="inputBanner">Phone(Whatsapp)</span>
            <input className="inputText" type="text" placeholder="07xxxx" required/>
          </div>
        </div>
        <br></br>
        <div className="doubleInput">
          <div className="inputItem">
            <span className="inputBanner">Website/App Name</span>
            <input className="inputText" type="text" placeholder="thdevSL" required/>
          </div>
          <div className="inputItem">
            <span className="inputBanner">Theme colors(use hex codes)</span>
            <input
              className="inputText"
              type="text"
              placeholder="#0000,#1234"
              required
            />
          </div>
        </div>
        <div className="inputItem">
          <span className="inputBanner">Type</span>
          <input className="inputText" type="text" placeholder="coffee shop" required/>
        </div>
        <br></br>
        <div className="inputItem">
          <span className="inputBanner">Attach a zip file</span>
          <input className="inputText" type="file" required/>
        </div>
        <div className="inputItem multiline">
          <span className="inputBanner">Tell us more</span>
          {/* <input className="inputText" type="multiline" /> */}
          <textarea
            className="inputText"
            name="message"
            rows="5"
            cols="30"
            required
          ></textarea>
        </div>
      </div>
      <div className="rightSide">
        <span className="rightTitle">Package</span>
        <ServiceItem pack={pack} />
        <div className="confirmButtonPannel">
          <span>After confirming the order, we will contact you.</span>
          <button type="submit" className="confirmButton">Confirm</button>
        </div>
      </div>
    </form>
  );
};

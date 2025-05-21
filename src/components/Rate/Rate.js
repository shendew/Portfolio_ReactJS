import React, { useState } from "react";
import "./Rate.css";
import { Button, Input } from "@mui/material";
import ReactStars from "react-rating-stars-component";
import { v4 as uuidv4 } from "uuid";
import { db } from "../../firebase";
import logo from "../../img/logo.png";

import { set, ref, onValue, remove, update } from "firebase/database";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
export const Rate = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [projectName, setprojectName] = useState("");
  const [desc, setdesc] = useState("");
  const [rate, setrate] = useState(5);

  const ratingChanged = (newRating) => {
    setrate(newRating);
    console.log(newRating);
  };

  const addReview = (e) => {
    // e.preventdefault
    if (name != "" && email != "" && projectName != "" && desc != "") {
      set(ref(db, "/Portfolio/Reviews/" + uuidv4()), {
        name: name,
        email: email,
        projectName: projectName,
        desc: desc,
        rate: rate,
      })
        .then(() => {
          Swal.fire({
            title: "Submitted",
            text: "Your review has submitted",
            icon: "success",
          });
          console.log("success");
          setname("");
          setemail("");
          setprojectName("");
          setdesc("");
          setrate(5);
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            // footer: '<a href="#">Why do I have this issue?</a>'
          });
          console.log(err);
        });
    }
  };

  return (
    <div className="rateContainer">
      <Link to="/">
        <img src={logo} alt="logo" className="rateLogo" />
      </Link>
      <div className="middleContainer">
        <span className="rateTitle">Give a Feedback</span>
        <div className="doubleRate">
          <Input
            disableUnderline
            className="rateInputs"
            placeholder="Your Name"
            required
            name="name"
            value={name}
            onChange={(e) => {
              console.log(e.target.value);
              setname(e.target.value);
            }}
          />
          <Input
            disableUnderline
            className="rateInputs"
            placeholder="Your Email"
            type="email"
            required
            name="email"
            value={email}
            onChange={(e) => {
              console.log(e.target.value);
              setemail(e.target.value);
            }}
          />
        </div>
        <Input
          disableUnderline
          className="rateInputs"
          placeholder="Project Name"
          required
          name="projectName"
          value={projectName}
          onChange={(e) => {
            console.log(e.target.value);

            setprojectName(e.target.value);
          }}
        />
        <div className="starPanel">
          <span>How was your experiance</span>
          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={50}
            value={rate}
            activeColor="#ffd700"
          />
        </div>
        <Input
          disableUnderline
          className="rateMultiInputs"
          placeholder="Write your review"
          multiline
          required
          sx={{
            padding: 1,
          }}
          minRows={5}
          value={desc}
          onChange={(e) => {
            console.log(e.target.value);

            setdesc(e.target.value);
          }}
        />
        <Button type="submit" onClick={() => addReview()}>
          Submit
        </Button>
      </div>
    </div>
  );
};

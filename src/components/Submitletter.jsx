import React, { useState } from "react";
import "./Submitletter.css";
import rimage from "../assets/illustration-sign-up-desktop.svg";
import tick from "../assets/icon-success.svg";

export default function Submitletter() {
  const [email, setemail] = useState("");
  function handleChange(e) {
    setemail(e.target.value);
  }
  function handleclick() {
    alert(email);
  }

  return (
    <div className="main">
      <div className="card">
        <div className="twocolumns">
          <div className="firstcolumn">
            <p className="stayupdated">Stay Updated!</p>
            <div className="text">
              <p>
                Join +60,000 Product managers and get Weekly updates right into
                your inbox
              </p>
            </div>
            <div className="text-small">
              <div className="tickline">
                <img className="imagesize" src={tick}></img>
                <p>
                  &nbsp;&nbsp;&nbsp;Product Discovery and building what matters
                </p>
              </div>
              <div className="tickline">
                <img className="imagesize" src={tick}></img>
                <p>
                  &nbsp;&nbsp;&nbsp;Measuring to ensure updates are a success
                </p>
              </div>
              <div className="tickline">
                <img className="imagesize" src={tick}></img>
                <p>&nbsp;&nbsp;&nbsp;And much more</p>
              </div>
            </div>
            <div className="emailbuttonmain">
              <p className="emailheading">Email Address</p>
              <input
                className="inputbutton"
                onChange={(e) => handleChange(e)}
                placeholder="email@company.com"
                type="email"
              ></input>
              <button onClick={() => handleclick()} className="submitbutton">
                Subscribe to monthly newsletter
              </button>
            </div>
          </div>
          <div className="secondcolumn">
            <img className="secondimage" src={rimage}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import heroImg from "../assets/facebook-hero.svg";
import "../index.css";

export default function LeftMainSection() {
  return (
    <>
      <div className="container">
        <img src={heroImg} alt="heroImg" />
        <p>Facebook helps you connect and share with the people in your life.</p>
      </div>
    </>
  );
}

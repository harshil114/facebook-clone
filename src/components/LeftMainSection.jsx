import React from "react";
import heroImg from "../assets/facebook-hero.svg";

export default function LeftMainSection() {
  return (
    <div className="w-1/2">
      <img src={heroImg} alt="heroImg" className="w-80" />
      <p className="ml-6 text-3xl w-10/12">
        Facebook helps you connect and share with the people in your life.
      </p>
    </div>
  );
}

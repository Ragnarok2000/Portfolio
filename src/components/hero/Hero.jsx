import React from "react";
import "./hero.css";
import profile_img from "../../assets/profile_img.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" />
      <h1>
        I am <span className="gradient-text">Abhay Pratap Singh</span>, Full
        Stack Developer Based In India
      </h1>

      <p>
        I am Currently a fresher but have handsome skill set to get Job Ready{" "}
      </p>
      <div className="hero-action">
        <div  className="hero-connect"><AnchorLink className='anchor-tag' offset={50} href="#contact">Connect With Me</AnchorLink></div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;

import React from "react";
import "./about.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/profile_img.svg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-tille">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={profile_img} alt="Profile" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I’m a passionate Full Stack Web Developer with a strong foundation
              in both front-end and back-end technologies. Though I’m currently
              a fresher, I bring a dynamic blend of curiosity, commitment, and a
              job-ready skill set that empowers me to build scalable, efficient,
              and user-friendly applications.
            </p>
            <p>
              My technical arsenal includes JavaScript, HTML, CSS, React JS,
              Redux, React Redux, Bootstrap, and React Bootstrap for crafting
              responsive and interactive interfaces. On the backend, I
              specialize in Java and Spring Boot, with expertise in RESTful API
              development, Microservices Architecture, Spring Data JPA, Spring
              Security, and MySQL database integration. I’m also proficient in
              Docker, Apache Kafka, OAuth2 & JWT authentication, JUnit & Mockito
              testing, Maven for dependency management, Spring Actuator, and
              Eureka for service discovery. My approach is rooted in
              Object-Oriented Programming principles and a deep enthusiasm for
              clean, maintainable code.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

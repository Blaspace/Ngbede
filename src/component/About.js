import React from "react";
import profile from "../public/images__2_-removebg-preview.png";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

function About() {
  const handleNavigate = (uri) => {
    window.open(uri);
  };
  return (
    <div className="about" id="about">
      <h2>About me</h2>
      <div className="about-body">
        <img src={profile} alt="profile" />
        <div>
          <h3>A little about be</h3>
          <br />
          <p>
            Hello, I'm James Ngbede Samuel, a passionate full stack developer
            with a strong background in mathematics.
            <br /> My passion for coding is fueled by the opportunity to bring
            ideas to life through elegant and efficient code. I thrive in
            collaborative environments, valuing teamwork and continuous
            learning. By staying up-to-date with the latest industry trends and
            best practices, I strive to deliver cutting-edge solutions that
            exceed expectations.
            <br />
            <br /> Feel free to explore my portfolio to see some of my past
            projects and get a glimpse of my capabilities. If you have an
            exciting project in mind or would like to collaborate, I would love
            to hear from you. Let's create something amazing together!"
          </p>
          <br />
          <span>
            <FaLinkedin
              className="icon"
              onClick={() =>
                handleNavigate(
                  "https://www.linkedin.com/in/james-samuel-8a3b21274"
                )
              }
            />
            <FaGithubSquare
              className="icon"
              onClick={() => handleNavigate("https://github.com/Blaspace")}
            />
          </span>
        </div>
      </div>
    </div>
  );
}

export default About;

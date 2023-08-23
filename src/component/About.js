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
           Hey there, I'm James Ngbede Samuel, a full stack developer from Abuja, Nigeria.
      With expertise in HTML/CSS, JavaScript, React.js, Node.js, Express.js, and MongoDB,
      I'm dedicated to crafting seamless web experiences that blend form and function.
    <br/>
      My journey started with a passion for problem-solving through code. From sleek user 
    interfaces to robust backends, I bring ideas to life with precision and creativity. 
      I'm committed to staying ahead of industry trends and embracing new challenges.
      <br/>
    When I'm not coding, I'm exploring emerging tech, enjoying a good book, or fueling my 
      creativity.
        <br/>
        Let's connect and shape the future through technology.
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

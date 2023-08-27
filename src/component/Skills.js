import React from "react";
import { FaReact, FaNodeJs, FaGit } from "react-icons/fa";
import { SiJavascript, SiMongodb } from "react-icons/si";
import { AiOutlineHtml5 } from "react-icons/ai";

function Skills() {
  const skills = [
    {
      skill: "HTML/CSS",
      about:
        "Proficient in creating visually appealing and responsive web interfaces using HTML and CSS, ensuring a seamless user experience across different devices.",
      Icon: AiOutlineHtml5,
    },
    {
      skill: "JavaScript",
      about:
        "Skilled in JavaScript, enabling the development of dynamic and interactive web applications with smooth functionality and enhanced user interactivity.",
      Icon: SiJavascript,
    },
    {
      skill: "React/Redux js",
      about:
        " Experienced in building robust and scalable front-end applications using React, utilizing its component-based architecture and state management for efficient development.",
      Icon: FaReact,
    },
    {
      skill: "Node js/Express",
      about:
        "Proficient in server-side development with Node.js and Express, allowing the creation of powerful and efficient back-end systems to handle data processing and API integration.",
      Icon: FaNodeJs,
    },
    {
      skill: "Git/gitHub",
      about:
        "Proficient in utilizing Git for version control and collaborating with other developers, leveraging GitHub for efficient project management and code sharing.",
      Icon: FaGit,
    },
    {
      skill: "MongoDB and more",
      about:
        "Skilled in working with MongoDB, a popular NoSQL database, for effecient data storage and retrieval, ensuring optimal performance for web application",
      Icon: SiMongodb,
    },
  ];
  return (
    <div className="skills" id="skills">
      <h2>My Skill Stack</h2>
      <br />
      <div className="all-skills">
        {skills.map((value, i) => {
          const { Icon } = value;
          return (
            <div key={i}>
              <span>
                <Icon />
              </span>
              <h3>{value.skill}</h3>
              <p>{value.about}</p>
            </div>
          );
        })}
      </div>
      <br />
    </div>
  );
}

export default Skills;

import React from "react";
import myblog from "../public/blogApp.png";
import event from "../public/Capture.PNG";
import { AiFillGithub } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";

function Project() {
  const project = [
    {
      name: "My social",
      img: myblog,
      about:
        "Here is a social media web application, built with React.js, Node.js, Express.js and MongoDB, that allows users connect in a secure and user-friendly environment. By providing essential features such as post editing, profile customization, and robust user authentication.",
      uri: "https://blog-app-client-73he.onrender.com",
      git: "https://github.com/Blaspace/blog-app-client.git",
      id: 1,
    },
    {
      name: "Peggies events",
      img: event,
      about:
        "I completed an exciting project building a static website for Peggies Events using React. The website showcases Peggies Events services, portfolio and contact information, providing visitors with a glimpse into their world of event planning and coordination.",
      uri: "https://peggies-event.onrender.com",
      git: "https://github.com/Blaspace/event",
      id: 2,
    },
  ];
  return (
    <div className="project" id="project">
      <h2>My Project</h2>
      <br />
      <div className="project-list">
        {project.map((value) => {
          return (
            <div key={value.id}>
              <header>
                <img src={value.img} alt="my app" />
              </header>
              <section>
                <h3>{value.name}</h3>
                <br />
                <p>{value.about}</p>
                <br />
                <span>
                  <button
                    onClick={() => {
                      window.open(value.uri);
                    }}
                  >
                    <CgWebsite
                      size={27}
                      style={{ padding: "0", marginRight: "5px" }}
                    />{" "}
                    live
                  </button>
                  <button
                    onClick={() => {
                      window.open(value.git);
                    }}
                  >
                    <AiFillGithub
                      size={27}
                      style={{ padding: "0", marginRight: "5px" }}
                    />{" "}
                    <span>gitHub</span>
                  </button>
                </span>
                <br />
              </section>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Project;

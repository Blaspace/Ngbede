import React from "react";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

function Footer() {
  const handleNavigate = (e) => {
    window.open(e);
  };
  return (
    <footer className="footer">
      <article>Designed and developed by James Ngbede Samuel</article>
      <span>
        <FaLinkedin
          className="icon"
          onClick={() =>
            handleNavigate("https://www.linkedin.com/in/james-samuel-8a3b21274")
          }
        />
        <FaGithubSquare
          className="icon"
          onClick={() => handleNavigate("https://github.com/Blaspace")}
        />
      </span>
          <p>+234 816 653 3430 </p>
    </footer>
  );
}

export default Footer;

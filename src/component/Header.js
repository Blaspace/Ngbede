import React from "react";
import profile from "../public/IMG-20230503-WA0022_2-removebg-preview.png";

function Header() {
  return (
    <header className="header">
      <div className="header-text">
        <p> Hello,</p>
        <h1> I'm James Ngbede Samuel,</h1>
        <h3 data-text="a fullstack developer">a fullstack developer</h3>
        <br />
        <br />
        <a href="#contact">
          <button>Get in touch</button>
        </a>
      </div>
      <div className="header-image">
        <img src={profile} alt="profile" />
      </div>
    </header>
  );
}

export default Header;

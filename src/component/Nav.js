import React, { useState } from "react";
import { FaHamburger } from "react-icons/fa";

function Nav() {
  const [toggle, setToggle] = useState(false);
  const [contact, setContact] = useState(false);
  return (
    <nav className="nav">
      <h2>
        <span>Ng</span>bede
      </h2>
      <ul>
        <a href="#about">
          <li>About</li>
        </a>
        <a href="#skills">
          <li>Skills</li>
        </a>
        <a href="#project">
          <li>Project</li>
        </a>
        <a href="#contact">
          <li>Contact</li>
        </a>
      </ul>
      <h1>
        {toggle ? (
          <article
            onClick={() => setToggle(false)}
            style={{ fontSize: "larger" }}>
            &times;
          </article>
        ) : (
          <FaHamburger onClick={() => setToggle(true)} />
        )}
      </h1>
      {toggle && (
        <div className="menu">
          <a href="#about">
            <li
              onClick={() => {
                setToggle(false);
              }}>
              About
            </li>
          </a>
          <a href="#skills">
            <li
              onClick={() => {
                setToggle(false);
              }}>
              Skills
            </li>
          </a>
          <a href="#project">
            <li
              onClick={() => {
                setToggle(false);
              }}>
              Project
            </li>
          </a>
          <a href="#contact">
            <li
              onClick={() => {
                setToggle(false);
              }}>
              Contact
            </li>
          </a>
        </div>
      )}
      <button onClick={() => (contact ? setContact(false) : setContact(true))}>
        Call me
      </button>
      {contact && (
        <section className="number">
          <p>08166533430</p>
        </section>
      )}
    </nav>
  );
}

export default Nav;

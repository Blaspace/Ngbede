import React from "react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import PopUp from "./PopUp";

function Contact() {
  const [text, setText] = useState(null);
  const form = useRef();
  const firstName = useRef();
  const secondName = useRef();
  const email = useRef();
  const number = useRef();
  const message = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ras6ajn",
        "template_0otu6tj",
        form.current,
        "-EKLMNlWVDcoczk7f"
      )
      .then(
        (result) => {
          number.current.value = "";
          email.current.value = "";
          firstName.current.value = "";
          secondName.current.value = "";
          message.current.value = "";
          setText(
            "Hello, thanks for contacting me, your message has been received I will get back to you shortly"
          );
        },
        (error) => {
          setText("oops, sorry something went wrong please try again");
        }
      );
  };
  return (
    <div className="contact" id="contact">
      <h2>Get in touch with me</h2>
      <br />
      <form onSubmit={sendEmail} ref={form}>
        <br />
        <span>
          <input
            type="text"
            ref={firstName}
            placeholder="first name..."
            name="firstName"
            required
          />
          <input
            type="text"
            ref={secondName}
            placeholder="last name..."
            name="secondName"
            required
          />
        </span>
        <span>
          <input
            type="tel"
            ref={number}
            placeholder="phone number..."
            name="number"
            required
          />
          <input
            type="email"
            ref={email}
            placeholder="email..."
            name="email"
            required
          />
        </span>
        <textarea
          placeholder="message..."
          ref={message}
          name="message"
          required
        />
        <br />
        <button>Send Message</button>
        <br />
      </form>
      <PopUp message={text} setMessage={setText} />
    </div>
  );
}

export default Contact;

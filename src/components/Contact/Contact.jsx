import React, { useEffect, useRef } from "react";
import { AiOutlineUp } from "react-icons/ai";
import emailjs from "@emailjs/browser";
import Aos from "aos";
import "aos/dist/aos.css";
import "./contact.css";
import Input from "./Input";

const Contact = () => {
  useEffect(() => {
    Aos.init({});
  }, []);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ho2ibnu", "Ibbi_autoreply357753", form.current, "lYuful5ws87LyIj53"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div id="contact">
      <h1 data-aos="fade-up" className="contact-me">
        CONTACT ME
      </h1>

      <div className="contact-container">
        <div className="info-container">
          <p className="available">
            I'm available for work.
            <br />
            Drop me a word at <span>stratadragon007@gmail.com</span>.
          </p>
        </div>
        <div className="form-container">
          <form ref={form} onSubmit={sendEmail}>
            <Input name="name" type="text" placeholder="Name" />
            <Input name="email" type="email" placeholder="Email Address" />
            <Input name="subject" type="text" placeholder="Subject" />
            <textarea
              id=""
              name="message"
              rows="4"
              placeholder="Message"
              required
            />
            <div className="button-scroll">
              <button type="submit" className="btn" value="Send message">
                Send Message
              </button>
              <div className="scroll-up">
                <a href="#">
                  <AiOutlineUp />
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

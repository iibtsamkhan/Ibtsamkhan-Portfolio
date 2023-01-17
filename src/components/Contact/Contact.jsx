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
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
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
                  <!-- Put this code anywhere in the body of your page where you want the badge to show up. -->

<div itemscope itemtype='http://schema.org/Person' class='fiverr-seller-widget' style='display: inline-block;'>
     <a itemprop='url' href=https://www.fiverr.com/umairbilal863 rel="nofollow" target="_blank" style='display: inline-block;'>
        <div class='fiverr-seller-content' id='fiverr-seller-widget-content-cc742342-4174-45f5-a89c-ac66ffaccd53' itemprop='contentURL' style='display: none;'></div>
        <div id='fiverr-widget-seller-data' style='display: none;'>
            <div itemprop='name' >umairbilal863</div>
            <div itemscope itemtype='http://schema.org/Organization'><span itemprop='name'>Fiverr</span></div>
            <div itemprop='jobtitle'>Seller</div>
            <div itemprop='description'>Hi! It's a pleasure to have you going through my profile. I believe we can be a great match. I am an IT Student and a Web Developer. I run a Digital Company and our motive is to make your business. We provide all kind of web services from Frontend to Backend in popular Stacks. I am very passionate to provide my clients with best possible services and do my job with utmost dedication. Talk to you soon!</div>
        </div>
    </a>
</div>

<script id='fiverr-seller-widget-script-cc742342-4174-45f5-a89c-ac66ffaccd53' src='https://widgets.fiverr.com/api/v1/seller/umairbilal863?widget_id=cc742342-4174-45f5-a89c-ac66ffaccd53' data-config='{"category_name":"Programming \u0026 Tech"}' async='true' defer='true'></script>
<!-- Put this code anywhere in the body of your page where you want the badge to show up. -->

<div itemscope itemtype='http://schema.org/Person' class='fiverr-seller-widget' style='display: inline-block;'>
     <a itemprop='url' href=https://www.fiverr.com/umairbilal863 rel="nofollow" target="_blank" style='display: inline-block;'>
        <div class='fiverr-seller-content' id='fiverr-seller-widget-content-cc742342-4174-45f5-a89c-ac66ffaccd53' itemprop='contentURL' style='display: none;'></div>
        <div id='fiverr-widget-seller-data' style='display: none;'>
            <div itemprop='name' >umairbilal863</div>
            <div itemscope itemtype='http://schema.org/Organization'><span itemprop='name'>Fiverr</span></div>
            <div itemprop='jobtitle'>Seller</div>
            <div itemprop='description'>Hi! It's a pleasure to have you going through my profile. I believe we can be a great match. I am an IT Student and a Web Developer. I run a Digital Company and our motive is to make your business. We provide all kind of web services from Frontend to Backend in popular Stacks. I am very passionate to provide my clients with best possible services and do my job with utmost dedication. Talk to you soon!</div>
        </div>
    </a>
</div>

<script id='fiverr-seller-widget-script-cc742342-4174-45f5-a89c-ac66ffaccd53' src='https://widgets.fiverr.com/api/v1/seller/umairbilal863?widget_id=cc742342-4174-45f5-a89c-ac66ffaccd53' data-config='{"category_name":"Programming \u0026 Tech"}' async='true' defer='true'></script>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

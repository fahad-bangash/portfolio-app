import React, { useRef } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebookMessenger } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import "./Contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_s0dqqgj",
        "template_z2p7dln",
        form.current,
        "1GW3Zs9IcI9e3rH8c"
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
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>fahadshah@gmail.com</h5>
            <a href="mailto:fahadshah779@gmail.com" target="__blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <FaFacebookMessenger className="contact__option-icon" />
            <h4>Messanger</h4>
            <h5>fahadblogger</h5>
            <a href="https://facebook.com">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+92 3018814816</h5>
            <a href="https://api.whatsapp.com/send?phone=+923018814816">
              Send a message
            </a>
          </article>
        </div>
        {/* End of Contact Option */}
        {
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="Enter Your Full Name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              rows="7"
              placeholder="Your Message"
              required
            />

            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        }
      </div>
    </section>
  );
};

export default Contact;

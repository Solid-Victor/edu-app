import "./Contact.css";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
// import emailjs from 'emailjs-com'
import msg_icon from "../../assets/images/msg-icon.png";
import mail_icon from "../../assets/images/mail-icon.png";
import phone_icon from "../../assets/images/phone-icon.png";
import location_icon from "../../assets/images/location-icon.png";
import white_arrow from "../../assets/images/white-arrow.png";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs
      .sendForm(
        "service_rax1p0l",
        "template_k3n0f63",
        e.target,
        "bU3KirnVN2Rmd7alO"
      )
      .then((response) => {
        setStatus("SUCCESSFUL");
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((error) => {
        console.error("FAILED...", error);
        setStatus("FAILED");
        setIsLoading(false);
      });
    e.target.reset();
    if (isLoading) {
      console.log(isLoading);
    } else console.log("not loading");

    console.log(status);
    alert(status);
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={msg_icon} alt="" />
        </h3>
        <p>
          Feel free to reach out through contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          university community.
        </p>
        <ul>
          <li>
            {" "}
            <img src={mail_icon} alt="" />
            victorcontents@gmail.com
          </li>
          <li>
            {" "}
            <img src={phone_icon} alt="" />
            +234 806 22 139 88
          </li>
          <li>
            {" "}
            <img src={location_icon} alt="" /> NO.2 Damson Street, Jikwoyi Phase
            1 Abuja
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form ref={form} onSubmit={sendEmail}>
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label htmlFor="email">
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              required
            />
            <label htmlFor="message"></label>
            <textarea
              name="message"
              rows="6"
              placeholder="Enter your message"
              required
            ></textarea>
            <button type="submit" className="btn dark-btn">
              {isLoading? 'Loading...': 'Submit Now'}
              <img src={white_arrow} alt="" />
            </button>
          </label>
        </form>
        <span></span>
      </div>
    </div>
  );
};

export default Contact;

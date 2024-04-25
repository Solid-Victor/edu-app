import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/images/msg-icon.png";
import mail_icon from "../../assets/images/mail-icon.png";
import phone_icon from "../../assets/images/phone-icon.png";
import location_icon from "../../assets/images/location-icon.png";
import white_arrow from "../../assets/images/white-arrow.png";

const Contact = () => {
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
            +234 818 73 165 87
          </li>
          <li>
            {" "}
            <img src={location_icon} alt="" /> NO.2 Damson Street, Jikwoyi Phase
            1 Abuja
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form action="">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name "
            required
          />
          <label htmlFor="tel">
            <input
              type="number"
              name="pone"
              placeholder="Enter your mobile number"
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
              Submit now <img src={white_arrow} alt="" />
            </button>
          </label>
        </form>
        <span></span>
      </div>
    </div>
  );
};

export default Contact;
// webforms.com

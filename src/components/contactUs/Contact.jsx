import React, { useState } from "react";
import "./contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "7714286b-ab47-4d7c-98ed-09020d414064", // Replace with your actual key
          ...formData
        }),
      });

      const result = await response.json();
      if (result.success) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get In Touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I am currently available and actively seeking opportunities to
            collaborate on new projects. Whether it's a short-term assignment or
            a long-term engagement, I’m open to contributing my skills and
            experience to meaningful work. I’m committed to delivering
            high-quality results, meeting deadlines, and maintaining clear
            communication throughout the process. If you have a project in mind
            or need support on an existing one, I’d be glad to connect and
            explore how I can help.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>abhay.25feb@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>+91-9870659676</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>Bareilly, Uttar Pradesh, India</p>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="contact-right">
          <label>Your Name</label>
          <input
            type="text"
            placeholder="Enter Your Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label>Your Email</label>
          <input
            type="email"
            placeholder="Enter your Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label>Write Your Message Here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="contact-submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit Now"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
import React from "react";
import "../styles/contact.css";
import { Link } from "react-router-dom";
import GmailImage from "../images/contact/gmail.png";
import InstagramImage from "../images/contact/instagram.png";
import LinkedinImage from "../images/contact/linkedin.svg";
const Contact = () => {
  return (
    <section className="contact-section" id="contact-section">
      <h2 className="contact-heading">Contact Us</h2>
      <p className="contact-text">
        We are always open to discussing new projects, creative ideas, or
        opportunities to be part of your vision. Whether you're looking to
        collaborate on a groundbreaking concept, need expert advice on a
        particular project, or simply want to connect with like-minded
        professionals, we're here to help. Our team is dedicated to bringing
        innovative solutions to life, and we believe that every great project
        starts with a conversation. Reach out to us through the following
        platforms, and let's explore the possibilities together. Your vision,
        combined with our expertise, can lead to something truly extraordinary.
      </p>
      <h3 className="social-heading">Our Social Media Profiles</h3>

      <div className="contact-info">
        <div className="contact-info-item">
          <Link
            className="contact-anchor"
            aria-label="Email Peax Studio"
            to="mailto:peaxstudio@gmail.com"
          >
            <img
              src={GmailImage}
              alt="Peax Studio Gmail"
              className="contact-icon"
            />
            peaxstudio@gmail.com
          </Link>
        </div>
        <div className="contact-info-item">
          <Link
            className="contact-anchor"
            to="https://www.linkedin.com/in/peaxstudio"
            target="_blank"
            aria-label="Peax Studio LinkedIn Profile"
          >
            <img
              src={LinkedinImage}
              alt="Peax Studio Linkedin"
              className="contact-icon"
            />
            peaxstudio
          </Link>
        </div>
        <div className="contact-info-item">
          <Link
            className="contact-anchor"
            to="https://instagram.com/peaxstudio"
            target="_blank"
            aria-label="Peax Studio GitHub Profile"
          >
            <img
              src={InstagramImage}
              alt="Peax Studio Instagram"
              className="contact-icon"
            />
            peaxstudio
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;

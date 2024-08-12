import React from 'react';
import '../styles/contact.css';
import { Link } from "react-router-dom";

const Contact = () => {
  return (
 
    <main class="contact-container">
        <section class="contact-info">
            <h2 class="contact-title">Our Contact Information</h2>
            <p class="contact-description">
                We are always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Reach out to us through the following platforms:
            </p>
            <div class="contact-details">
                <div class="contact-item">
                    <h3 class="contact-label">Email:</h3>
                    <p><Link to="mailto:peaxstudio@gmail.com">peaxstudio@gmail.com</Link></p>
                </div>
                <div class="contact-item">
                    <h3 class="contact-label">LinkedIn:</h3>
                    <p><Link to="https://www.linkedin.com/in/caner-kuyucu" target="_blank">linkedin.com/in/caner-kuyucu</Link></p>
                </div>
                <div class="contact-item">
                    <h3 class="contact-label">GitHub:</h3>
                    <p><Link to="https://github.com/kuyucucaner" target="_blank">github.com/kuyucucaner</Link></p>
                </div>
            </div>
        </section>
    </main>

  );
};

export default Contact;

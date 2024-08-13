import React from 'react';
import '../styles/contact.css';
import { Link } from "react-router-dom";

const Contact = () => {
  return (
 
    <main className="contact-container">
        <section className="contact-info">
            <h2 className="contact-title">Our Contact Information</h2>
            <p className="contact-description">
                We are always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Reach out to us through the following platforms:
            </p>
            <div className="contact-details">
                <div className="contact-item">
                    <h3 className="contact-label">Email: </h3>
                    <p className='contact-link'> <Link className='contact-href'to="mailto:peaxstudio@gmail.com">peaxstudio@gmail.com</Link></p>
                </div>
                <div className="contact-item">
                    <h3 className="contact-label">LinkedIn: </h3>
                    <p className='contact-link'><Link className='contact-href'to="https://www.linkedin.com/in/caner-kuyucu" target="_blank">linkedin.com/in/caner-kuyucu</Link></p>
                </div>
                <div className="contact-item">
                    <h3 className="contact-label">GitHub: </h3>
                    <p className='contact-link'><Link className='contact-href' to="https://github.com/kuyucucaner" target="_blank">github.com/kuyucucaner</Link></p>
                </div>
            </div>
        </section>
    </main>

  );
};

export default Contact;

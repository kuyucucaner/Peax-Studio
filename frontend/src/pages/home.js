import React, { useState, useEffect ,useCallback } from "react";
import "../styles/home.css";
import HomeImage from "../images/home/peaxstudio.svg";
import GmailImage from "../images/contact/gmail.png";
import { toast } from 'react-toastify';


const Home = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); // Yeni state eklendi


  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true); // Form gönderimi başladığında buton inactive olur

    const formData = {
      from: event.target.email.value,
      subject: event.target.subject.value,
      text: event.target.message.value,
    };

    try {
      const response = await fetch('/api/mail/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('Email sent successfully!');  // Success notification
        setIsModalOpen(false);
      } else {
        toast.error('An error occurred while sending the email.');  // Error notification
        setIsModalOpen(false);
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('An error occurred, please try again.');  // Error notification
      setIsModalOpen(false);
    } finally {
      setIsSubmitting(false); // Form gönderimi tamamlandığında buton tekrar aktif olur
    }
};

  
  const handleButtonClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error(`Section with ID ${sectionId} not found.`);
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, [setIsModalOpen]);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
      if (window.scrollY > window.innerHeight) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        handleCloseModal();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleCloseModal]);

  const handleOverlayClick = (event) => {
    if (event.target.classList.contains("modal-overlay")) {
      handleCloseModal();
    }
  };
  return (
    <section className="home">
      <div className="home-button-container">
        <button
          className="home-button"
          onClick={() => handleButtonClick("about-section")}
          aria-label="Scroll to About Section"
        >
          About Us
        </button>
        <button
          className="home-button"
          onClick={() => handleButtonClick("portfolio-container")}
          aria-label="Scroll to Portfolio Section"
        >
          Portfolio
        </button>

        <img
          src={HomeImage}
          alt="Peax Studio illustration"
          className="home-image"
        />
        <button
          className="home-button"
          onClick={() => handleButtonClick("product-section")}
          aria-label="Scroll to Projects Section"
        >
          Products
        </button>
        <button
          className="home-button"
          onClick={() => handleButtonClick("contact-section")}
          aria-label="Scroll to Contact Section"
        >
          Contact
        </button>
      </div>
      <div className="home-container">
        <div className="home-section">
          <h3 className="home-section-slogan">
            Make the best choice for your future!
          </h3>
          <h1 className="home-section-title">
            We craft innovative websites & mobile apps
          </h1>
          <h2 className="home-section-subtitle">
            Loved by users around the world
          </h2>
          <p className="home-section-text">Let us handle the hard work</p>
          <p className="home-section-subtext">Learn More About Us...</p>
        </div>
      </div>

      {showScrollButton && isScrolling && (
        <div className="scroll-buttons-container">
          <button
            className="scroll-to-top-button"
            aria-label="Scroll to Top"
            onClick={handleScrollToTop}
          >
            ↑
          </button>
          <button
            className="open-mail-modal-button"
            aria-label="Open Mail Modal"
            onClick={handleOpenModal}
          >
            <img
              src={GmailImage}
              alt="Gmail Modal"
              className="open-mail-modal-button-icon"
            />
          </button>
        </div>
      )}
      {isModalOpen && (
       <div className="modal-overlay" onClick={handleOverlayClick}>
       <div className="modal-container">
         <div className="modal-header">
           <h2 className="close-modal-title">Contact Form</h2>
           <button className="close-modal-button" onClick={handleCloseModal}>
             ×
           </button>
         </div>
         <div className="modal-body">
         <form onSubmit={handleSubmit}>
    <input type="email" name="email" placeholder="Email*" required />
    <input type="text" name="subject" placeholder="Subject*" required/>
    <textarea name="message" placeholder="Message*" required></textarea>
    <button type="submit" disabled={isSubmitting}>
             {isSubmitting ? "Sending..." : "Send"} {/* Buton gönderim sırasında disable olur */}
           </button>
</form>

         </div>
       </div>
     </div>
     
      )}
    </section>
  );
};

export default Home;

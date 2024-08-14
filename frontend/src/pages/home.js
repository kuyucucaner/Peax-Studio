import React, { useState, useEffect, useRef } from "react";
import "../styles/home.css";
import HomeImage from "../images/peaxstudio.svg";

const Home = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeoutRef = useRef(null); // Using useRef to store the timeout reference

  const handleProjectButtonClick = () => {
    const section = document.getElementById("project-container");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleAboutButtonClick = () => {
    const section = document.getElementById("about-container");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleContactButtonClick = () => {
    const section = document.getElementById("contact-container");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handlePortfolioButtonClick = () => {
    const section = document.getElementById("portfolio-container");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      clearTimeout(scrollTimeoutRef.current); // Clearing the previous timeout
      setIsScrolling(true);
      if (window.scrollY > window.innerHeight) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }

      scrollTimeoutRef.current = setTimeout(() => {
        // Storing the timeout reference in useRef
        setIsScrolling(false);
        setShowScrollButton(false);
      }, 1000); // Adjust delay (in milliseconds) as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeoutRef.current); // Clearing the timeout on cleanup
    };
  }, []);

  return (
    <div>
      <div className="home-button-container">
        <button className="home-button" onClick={handleContactButtonClick}>
          Contact
        </button>
        <button className="home-button" onClick={handleAboutButtonClick}>
          About
        </button>
        <img src={HomeImage} alt="home-image" className="home-image" />
        <button className="home-button" onClick={handlePortfolioButtonClick}>
          Portfolio
        </button>
        <button className="home-button" onClick={handleProjectButtonClick}>
          Projects
        </button>
      </div>
      <div className="home-container">
        <div className="home-section">
          <h6 className="home-section-slogan">
            Make best choice for your future!
          </h6>
          <h4 className="home-section-title">
            We create websites & mobile apps
          </h4>
          <h4 className="home-section-subtitle">loved around our friends</h4>
          <h6 className="home-section-text">Contact us for your dirty work</h6>
          <h6 className="home-section-text">Learn More About Us</h6>
        </div>
      </div>

      {showScrollButton && isScrolling && (
        <button className="scroll-to-top-button" onClick={handleScrollToTop}>
          ↑
        </button>
      )}
    </div>
  );
};

export default Home;

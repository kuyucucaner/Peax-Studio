import React, { useState, useEffect, useRef } from "react";
import "../styles/home.css";
import HomeImage from "../images/peaxstudio.svg";

const Home = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeoutRef = useRef(null);

  const handleButtonClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      clearTimeout(scrollTimeoutRef.current);
      setIsScrolling(true);
      if (window.scrollY > window.innerHeight) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }

      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
        setShowScrollButton(false);
      }, 2000); // Suggested delay of 2000ms
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  return (
    <div>
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

        <img src={HomeImage} alt="Home illustration" className="home-image" />
        <button
          className="home-button"
          onClick={() => handleButtonClick("project-section")}
          aria-label="Scroll to Projects Section"
        >
          Projects
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
          <p className="home-section-subtext">Learn More About Us</p>
        </div>
      </div>

      {showScrollButton && isScrolling && (
        <button
          className="scroll-to-top-button"
          aria-label="Scroll to Top"
          onClick={handleScrollToTop}
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default Home;

import React, { useState } from 'react';
import '../styles/burger-menu.css'; // CSS dosyasını bağladık.
import BurgerLogo from "../images/home/peaxstudio.svg";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleButtonClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    } else {
      console.error(`Section with ID ${sectionId} not found.`);
    }

  };

  // Menü dışına tıklandığında menüyü kapatacak fonksiyon
  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <section className="burger-menu-section">
      {/* Burger Logo */}
      <img
        src={BurgerLogo}
        alt="Peax Studio illustration"
        className="burger-menu-logo"
      />

      <div className="burger-menu-container">
        {/* Burger Menu Button */}
        <button 
          className={`burger-menu-icon ${isOpen ? 'open' : ''}`} 
          onClick={handleMenuToggle}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span className="burger-menu-line"></span>
          <span className="burger-menu-line"></span>
          <span className="burger-menu-line"></span>
        </button>

        {/* Navigation Menu */}
        <nav className={`menu-items ${isOpen ? 'open' : ''}`}>
          <ul className="menu-list">
            <li className='menu-list-item'>
              <button
                className="menu-button"
                onClick={() => handleButtonClick("about-section")}
                aria-label="Scroll to About Section"
              >
                About Us
              </button>
            </li>
            <li className='menu-list-item'>
              <button
                className="menu-button"
                onClick={() => handleButtonClick("portfolio-container")}
                aria-label="Scroll to Portfolio Section"
              >
                Portfolio
              </button>
            </li>
            <li className='menu-list-item'>
              <button
                className="menu-button"
                onClick={() => handleButtonClick("product-section")}
                aria-label="Scroll to Products Section"
              >
                Products
              </button>
            </li>
            <li className='menu-list-item'>
              <button
                className="menu-button"
                onClick={() => handleButtonClick("contact-section")}
                aria-label="Scroll to Contact Section"
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>


  <div 
          className={`burger-menu-overlay ${isOpen ? 'open' : ''}`} 
          onClick={handleCloseMenu}
        ></div>      </div>
    </section>
  );
};

export default BurgerMenu;

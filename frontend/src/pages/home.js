import React from 'react';
import '../styles/home.css';
import HomeImage from '../images/peaxstudio.svg';

const Home = () => {
  const handleButtonClick = () => {
    const section = document.getElementById('project-container');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <img src={HomeImage} alt="home-image" className='home-image'/>
      <div className='home-container'>
        <div className='home-section'>
          <h6 className='home-section-slogan'>Make best choice for your future!</h6>
          <h4 className='home-section-title'>We create websites & mobile apps</h4>
          <h4 className='home-section-subtitle'>loved around our friends</h4>
          <button className='home-section-button' onClick={handleButtonClick}>
            Check Our Projects
          </button>
          <h6 className='home-section-text'>
          Contact us for your dirty work</h6>
        </div>
      </div>
    </div>
  );
};

export default Home;

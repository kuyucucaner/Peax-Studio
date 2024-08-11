import React from 'react';
import '../styles/home.css';
import HomeImage from '../images/peaxstudio.svg';

const Home = () => {
  return (
    <body>
     <img src={HomeImage} alt="home-image" className='home-image'/>
      <div className='home-container'>
        <div className='home-section'>
            <h4 className='home-section-title'>We create mobile apps </h4>
            <h4 className='home-section-subtitle'>loved around our friends</h4>
            <button className='home-section-button'>Check Our Projects</button>
        </div>
      </div>
    </body>
  );
};

export default Home;

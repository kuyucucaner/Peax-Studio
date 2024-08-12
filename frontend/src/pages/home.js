import React from 'react';
import '../styles/home.css';
import HomeImage from '../images/peaxstudio.svg';

const Home = () => {
  return (
    <body>
     <img src={HomeImage} alt="home-image" className='home-image'/>
      <div className='home-container'>
        <div className='home-section'>
            <h6 className='home-section-slogan'>Make best choice for your future! </h6>
            <h4 className='home-section-title'>We create websites & mobile apps </h4>
            <h4 className='home-section-subtitle'>loved around our friends</h4>
            <button className='home-section-button'>Check Our Projects</button>
            <h6 className='home-section-text'>We're the best mdfker trio ever on world! </h6>
        </div>
      </div>
    </body>
  );
};

export default Home;

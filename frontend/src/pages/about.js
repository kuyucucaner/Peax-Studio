import React from "react";
import "../styles/about.css";

const About = () => {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-box">
          <img
            src="https://cdn.shopify.com/s/files/1/0306/6419/6141/articles/coding_languages.png?v=1619126283"
            alt="about-image"
            className="about-image"
          />
          <div className="about-content">
            <h1 className="about-title">About Peax Studio</h1>
            <p className="about-description">
              Peax Studio is a creative design and development studio dedicated
              to bringing innovative ideas to life. We specialize in crafting
              unique digital experiences, blending aesthetics with functionality
              to deliver impactful solutions. Our team of passionate
              professionals thrives on challenges and is committed to exceeding
              client expectations. At Peax Studio, we believe in the power of
              collaboration and creativity. Our mission is to transform concepts
              into reality by utilizing cutting-edge technologies and design
              principles. Whether it's web design, branding, or digital
              marketing, we approach each project with a fresh perspective,
              ensuring that every detail aligns with our clients' vision and
              goals. We are not just a studio; we are your partners in success.
              Join us on this journey to elevate your brand and create lasting
              impressions in the digital world.
            </p>
          </div>
        </div>
        <div className="about-achievements">
          <h2 className="about-subtitle">Mission</h2>
          <p className="about-description">
            Our mission is to deliver innovative and efficient solutions that
            not only meet but exceed our clients' expectations. We strive to
            provide exceptional service by combining creative ideas with
            cutting-edge technology, ensuring that every project we undertake is
            a success. We are committed to fostering long-term relationships
            with our clients, built on trust, integrity, and mutual respect.
          </p>

          <h2 className="about-subtitle">Vision</h2>
          <p className="about-description">
            Our vision is to be recognized as a leader in the creative design
            and development industry. We aim to set new standards in innovation
            and quality, consistently pushing the boundaries of what's possible.
            By staying ahead of industry trends and embracing new technologies,
            we aspire to create digital solutions that make a lasting impact on
            businesses and their audiences.
          </p>

          <h2 className="about-subtitle">Goals</h2>
          <p className="about-description">
            Our goals include continuous improvement in our processes and
            services, expanding our global reach, and enhancing our team's
            expertise. We are dedicated to achieving sustainable growth by
            focusing on client satisfaction, innovation, and excellence in
            everything we do. By setting clear and measurable objectives, we
            ensure that Peax Studio remains at the forefront of the industry.
          </p>
        </div>
        <div className="about-employee">
          <h1 className="about-employee-title">Who we are</h1>
          <div className="about-employee-section">
            <div className="about-employee-card">
              <img
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                alt="about-employee-photo"
                className="about-employee-photo"
              />
              <h3 className="about-employee-name">Müfit ŞAKIR</h3>
              <h5 className="about-employee-job">Web Developer</h5>
            </div>
            <div className="about-employee-card">
              <img
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                alt="about-employee-photo"
                className="about-employee-photo"
              />
              <h3 className="about-employee-name">Caner KUYUCU</h3>
              <h5 className="about-employee-job">Full Stack Developer</h5>
            </div>
            <div className="about-employee-card">
              <img
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                alt="about-employee-photo"
                className="about-employee-photo"
              />
              <h3 className="about-employee-name">Dağhan YAZGAN</h3>
              <h5 className="about-employee-job">Mobile Developer</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

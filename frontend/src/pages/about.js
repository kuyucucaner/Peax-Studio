import React from "react";
import "../styles/about.css";
import MissionImage from "../images/about/mission.png";
import AboutVideo from "../videos/about.mp4";
import VisionImage from "../images/about/vision.jpeg";
import ValueImage from "../images/about/value.jpg";
import FadeIn from "../components/fade-in";
const About = () => {
  return (
    <section className="about-section">
      <FadeIn direction="up">
        <div className="about-box">
          <div className="about-content">
            <video
              src={AboutVideo}
              autoPlay
              muted
              loop
              playsInline
              className="about-video"
              id="about-section"
            />

            <div className="overlay">
              <h1 className="about-title">About Peax Studio</h1>
              <p className="about-description-overlay">
                <b>Peax Studio </b>is a creative design and development studio
                dedicated to bringing innovative ideas to life. We specialize in
                crafting unique digital experiences, blending aesthetics with
                functionality to deliver impactful solutions. Our team of
                passionate professionals thrives on challenges and is committed
                to exceeding client expectations. At <b>Peax Studio</b> , we
                believe in the power of collaboration and creativity. Our
                mission is to transform concepts into reality by utilizing
                cutting-edge technologies and design principles. Whether it's
                web design, branding, or digital marketing, we approach each
                project with a fresh perspective, ensuring that every detail
                aligns with our clients' vision and goals. We are not just a
                studio; we are your partners in success. Join us on this journey
                to elevate your brand and create lasting impressions in the
                digital world.
              </p>
            </div>
          </div>
        </div>
      </FadeIn>

      <div className="about-achievements">
        <FadeIn direction="right">
          <div className="about-x">
            <div className="about-text-section">
              <h2 className="about-subtitle">What Drives Us</h2>
              <p className="about-description">
                Our mission is to deliver innovative, efficient solutions that
                go beyond simply meeting client expectations. We are driven by a
                commitment to excellence, transforming challenges into
                opportunities through creativity and cutting-edge technology.
                Every project presents an opportunity to set new benchmarks for
                success, showcasing our dedication to quality and attention to
                detail. At the heart of our mission is a belief in building
                lasting relationships with our clients, grounded in trust and
                collaboration.
              </p>
            </div>
            <img
              src={MissionImage}
              alt="Mission  Illustration"
              className="about-subimage"
            ></img>
          </div>
        </FadeIn>
        <FadeIn direction="left">
          <div className="about-x-reverse">
            <img
              src={VisionImage}
              alt="Vision Illustration"
              className="about-subimage"
            ></img>
            <div className="about-text-section">
              <h2 className="about-subtitle">OUR Vision</h2>
              <p className="about-description">
                Our vision is to be a global leader in delivering innovative,
                sustainable, and cutting-edge solutions that shape the future of
                our industry. We aim to inspire progress by continuously pushing
                the boundaries of technology and creativity, ensuring our
                clients are always a step ahead in an ever-evolving world.
                Through our unwavering dedication to quality, integrity, and
                excellence, we strive to create a positive impact on both our
                clients and the communities we serve. Ultimately, our vision is
                to set the standard for innovation, driving success for our
                clients and fostering long-lasting partnerships.
              </p>
            </div>
          </div>
        </FadeIn>
        <FadeIn direction="right">
          <div className="about-x">
            <div className="about-text-section">
              <h2 className="about-subtitle">OUR VALUE</h2>
              <p className="about-description">
                Our values are the foundation of everything we do. We believe in
                integrity, innovation, and collaboration as the core principles
                that guide our actions. Integrity ensures we are honest and
                transparent in all our dealings, fostering trust with our
                clients and partners. Innovation drives us to continuously seek
                new and better ways to deliver solutions that exceed
                expectations. Collaboration allows us to work together with our
                clients and teams to achieve shared success. We are also deeply
                committed to sustainability, quality, and excellence, ensuring
                that every project we undertake creates lasting value for all
                stakeholders.
              </p>
            </div>
            <img
              src={ValueImage}
              alt="Value Illustration"
              className="about-subimage"
            ></img>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default About;

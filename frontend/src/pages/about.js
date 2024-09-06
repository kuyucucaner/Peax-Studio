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
              Our mission is to deliver innovative, efficient solutions that go
              beyond merely meeting client expectations. We are driven by a
              commitment to excellence, seeking to transform challenges into
              opportunities through creative vision and the latest technological
              advancements. Each project we undertake is an opportunity to set a
              new standard of success, where our dedication to quality and
              detail shines through. At the heart of our mission is the belief
              in building lasting relationships with our client.
            </p>
          </div>
          <img
            src={MissionImage}
            alt="Vision Illustration"
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
              Our mission is to deliver innovative, efficient solutions that go
              beyond merely meeting client expectations. We are driven by a
              commitment to excellence, seeking to transform challenges into
              opportunities through creative vision and the latest technological
              advancements. Each project we undertake is an opportunity to set a
              new standard of success, where our dedication to quality and
              detail shines through. At the heart of our mission is the belief
              in building lasting relationships with our clients, founded on the
              principles of trust, integrity, and mutual respect. We view every
              client interaction as a chance to deepen these values and create
              solutions that truly resonate.
            </p>
          </div>
        </div>
        </FadeIn>
        <FadeIn direction="right">
        <div className="about-x">
          <div className="about-text-section">
            <h2 className="about-subtitle">OUR VALUE</h2>
            <p className="about-description">
              Our mission is to deliver innovative, efficient solutions that go
              beyond merely meeting client expectations. We are driven by a
              commitment to excellence, seeking to transform challenges into
              opportunities through creative vision and the latest technological
              advancements. Each project we undertake is an opportunity to set a
              new standard of success, where our dedication to quality and
              detail shines through. At the heart of our mission is the belief
              in
            </p>
          </div>
          <img
            src={ValueImage}
            alt="Vision Illustration"
            className="about-subimage"
          ></img>
        </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default About;

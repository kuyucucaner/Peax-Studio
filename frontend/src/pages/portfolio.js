import React from "react";
import { Link } from "react-router-dom";
import "../styles/portfolio.css";
import CanerImage from "../images/portfolio/caner.jpeg";
import MüfitImage from "../images/portfolio/müfit.jpeg";
import DağhanImage from "../images/portfolio/dağhan.jpeg";
import ResumeImage from "../images/portfolio/resume.png";
import LinkedinImage from "../images/portfolio/linkedin.png";
import GithubImage from "../images/portfolio/github.png";
import FadeIn from "../components/fade-in";

const Portfolio = () => {
  return (
    <section className="portfolio-container">
      <FadeIn direction="up">
        <h1 className="portfolio-title" id="portfolio-container">
          Meet Our Team
        </h1>
      </FadeIn>
      <div className="portfolio-section">
        <FadeIn direction="left">
          <div className="portfolio-card">
            <img
              src={CanerImage}
              alt="Taha Caner Kuyucu"
              className="portfolio-photo"
            />
            <div className="portfolio-box">
              <h2 className="portfolio-name">Caner KUYUCU</h2>
              <h3 className="portfolio-job">Full Stack Developer</h3>
              <p className="portfolio-information">
                Caner Kuyucu is an enthusiastic and dynamic Full Stack Developer
                with a fresh perspective on both front-end and back-end
                development. Skilled in modern technologies such as HTML, CSS,
                JavaScript, and React, he excels in creating user-friendly and
                effective web applications. Additionally, he has experience in
                building robust and scalable back-end solutions using tools like
                Node.js and Express. Caner is a team player with a strong
                aptitude for learning and problem-solving, bringing a fresh
                perspective to each project and adding value through his
                technical expertise.
              </p>
              <div className="portfolio-social">
                <a
                  href="/files/caner.pdf"
                  download
                  className="portfolio-resume-link"
                >
                  <img
                    src={ResumeImage}
                    alt="Caner Kuyucu Resume"
                    className="portfolio-link-icon"
                  />{" "}
                  CV
                </a>
                <Link
                  to="https://www.linkedin.com/in/caner-kuyucu/"
                  className="portfolio-linkedin-link"
                  target="_blank"
                >
                  <img
                    src={LinkedinImage}
                    alt="Caner Kuyucu Linkedin"
                    className="portfolio-link-icon"
                  />
                </Link>
                <Link
                  to="https://github.com/kuyucucaner"
                  className="portfolio-github-link"
                  target="_blank"
                >
                  <img
                    src={GithubImage}
                    alt="Caner Kuyucu Github"
                    className="portfolio-link-icon"
                  />
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
        <FadeIn direction="right">
          <div className="portfolio-card-reverse">
            <div className="portfolio-box-reverse">
              <h2 className="portfolio-name-reverse">Müfit ŞAKIR</h2>
              <h3 className="portfolio-job">Web Developer</h3>
              <p className="portfolio-information">
                Müfit Şakır is a talented and enthusiastic Web Developer with a
                broad knowledge of modern web technologies. His expertise in
                HTML, CSS, and JavaScript allows him to create aesthetically
                pleasing and functional websites. By prioritizing user
                experience, he contributes to projects both visually and
                technically. Müfit brings a creative approach to each project
                with his openness to learning and innovation, and he excels in
                collaborating effectively within a team.
              </p>
              <div className="portfolio-social-reverse">
                <Link
                  to="https://github.com/mufitsakir"
                  className="portfolio-github-link"
                  target="_blank"
                >
                  <img
                    src={GithubImage}
                    alt="Müfit Şakır Github"
                    className="portfolio-link-icon"
                  />
                </Link>
                <Link
                  to="https://www.linkedin.com/in/kemal-m%C3%BCfit-%C5%9Fakir-793233225/"
                  className="portfolio-linkedin-link"
                  target="_blank"
                >
                  <img
                    src={LinkedinImage}
                    alt="Müfit Şakır Linkedin"
                    className="portfolio-link-icon"
                  />
                </Link>
                {/* 
              <a
                href="/files/caner.pdf"
                download
                className="portfolio-resume-link"
              >
                <img
                  src={ResumeImage}
                  alt="Müfit Şakır Resume"
                  className="portfolio-link-icon"
                />{" "}
                Resume
              </a> */}
              </div>
            </div>
            <img
              src={MüfitImage}
              alt="Taha Caner Kuyucu"
              className="portfolio-photo"
            />
          </div>
        </FadeIn>
        <FadeIn direction="left">
          <div className="portfolio-card">
            <img
              src={DağhanImage}
              alt="Taha Caner Kuyucu"
              className="portfolio-photo"
            />
            <div className="portfolio-box">
              <h2 className="portfolio-name">Dağhan Yazgan</h2>
              <h3 className="portfolio-job">Mobile Developer</h3>
              <p className="portfolio-information">
                Dağhan Yazgan is a promising young Mobile Developer with strong
                expertise in Flutter and Dart technologies. He excels in
                creating high-performance and user-friendly mobile applications.
                Capable of developing effective and modern applications for both
                iOS and Android platforms, Dağhan adds value to projects by
                prioritizing user experience. With an open and innovative
                approach to learning, Dağhan brings creative solutions to mobile
                application projects and works harmoniously within a team.
              </p>
              <div className="portfolio-social">
                <a
                  href="/files/dağhan.pdf"
                  download
                  className="portfolio-resume-link"
                >
                  <img
                    src={ResumeImage}
                    alt="Dağhan Yazgan Resume"
                    className="portfolio-link-icon"
                  />
                  CV
                </a>

                <Link
                  to="https://www.linkedin.com/in/daghanyazgan/"
                  className="portfolio-linkedin-link"
                  target="_blank"
                >
                  <img
                    src={LinkedinImage}
                    alt="Dağhan Yazgan Linkedin"
                    className="portfolio-link-icon"
                  />
                </Link>
                {/* <Link to="#" className="portfolio-github-link">
                <img
                  src={GithubImage}
                  alt="Dağhan Yazgan Github"
                  className="portfolio-link-icon"
                />
              </Link> */}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Portfolio;

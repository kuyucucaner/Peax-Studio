import React from "react";
import { Link } from "react-router-dom";
import "../styles/portfolio.css";
import CanerImage from "../images/portfolio/caner.jpeg";
import MüfitImage from "../images/portfolio/müfit.jpeg";
import DağhanImage from "../images/portfolio/dağhan.jpeg";
import ResumeImage from "../images/portfolio/resume.png";
import LinkedinImage from "../images/portfolio/linkedin.png";
import GithubImage from "../images/portfolio/github.png";

const Portfolio = () => {
  return (
    <section className="portfolio-container" id="portfolio-container">
      <h1 className="portfolio-title">Meet Our Team</h1>
      <div className="portfolio-section">
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
              Ben, farklı alanlarda uzmanlaşmış, yaratıcı çözümler sunabilen ve
              projelerde yüksek performans gösteren bir profesyonelim.
              Teknoloji, tasarım ve yönetim gibi çeşitli disiplinlerde
              derinlemesine bilgi sahibiyim. Takım çalışmasına yatkın, iletişim
              becerileri güçlü ve yeniliklere açık biriyim. Her zaman en iyisini
              hedefler, zorluklarla başa çıkmada etkili stratejiler geliştirir
              ve süreçlerin iyileştirilmesine katkıda bulunurum. Benimle
              çalışanlar, projelerinde fark yaratan bir destek alır ve her
              adımda güvenilir bir iş ortağı bulur.
            </p>
            <div className="portfolio-social">
              <Link to='#' className="portfolio-resume-link"><img src={ResumeImage} alt="Caner Kuyucu Resume" className="portfolio-link-icon"/> Resume</Link>
              <Link to='#' className="portfolio-linkedin-link"><img src={LinkedinImage} alt="Caner Kuyucu Resume" className="portfolio-link-icon"/></Link>
              <Link to='#' className="portfolio-github-link"><img src={GithubImage} alt="Caner Kuyucu Resume" className="portfolio-link-icon"/></Link>
            </div>
          </div>
        </div>


        <div className="portfolio-card">
            <div className="portfolio-box-reverse">
            <h2 className="portfolio-name-reverse">Müfit ŞAKIR</h2>
            <h3 className="portfolio-job">Web Developer</h3>
            <p className="portfolio-information">
              Ben, farklı alanlarda uzmanlaşmış, yaratıcı çözümler sunabilen ve
              projelerde yüksek performans gösteren bir profesyonelim.
              Teknoloji, tasarım ve yönetim gibi çeşitli disiplinlerde
              derinlemesine bilgi sahibiyim. Takım çalışmasına yatkın, iletişim
              becerileri güçlü ve yeniliklere açık biriyim. Her zaman en iyisini
              hedefler, zorluklarla başa çıkmada etkili stratejiler geliştirir
              ve süreçlerin iyileştirilmesine katkıda bulunurum. Benimle
              çalışanlar, projelerinde fark yaratan bir destek alır ve her
              adımda güvenilir bir iş ortağı bulur.
            </p>
            <div className="portfolio-social-reverse">
              <Link to='#' className="portfolio-github-link"><img src={GithubImage} alt="Caner Kuyucu Resume" className="portfolio-link-icon"/></Link>
              <Link to='#' className="portfolio-linkedin-link"><img src={LinkedinImage} alt="Caner Kuyucu Resume" className="portfolio-link-icon"/></Link>
              <Link to='#' className="portfolio-resume-link"><img src={ResumeImage} alt="Caner Kuyucu Resume" className="portfolio-link-icon"/> Resume</Link>
            </div>
          </div>
          <img
            src={MüfitImage}
            alt="Taha Caner Kuyucu"
            className="portfolio-photo"
          />
        </div>

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
              Ben, farklı alanlarda uzmanlaşmış, yaratıcı çözümler sunabilen ve
              projelerde yüksek performans gösteren bir profesyonelim.
              Teknoloji, tasarım ve yönetim gibi çeşitli disiplinlerde
              derinlemesine bilgi sahibiyim. Takım çalışmasına yatkın, iletişim
              becerileri güçlü ve yeniliklere açık biriyim. Her zaman en iyisini
              hedefler, zorluklarla başa çıkmada etkili stratejiler geliştirir
              ve süreçlerin iyileştirilmesine katkıda bulunurum. Benimle
              çalışanlar, projelerinde fark yaratan bir destek alır ve her
              adımda güvenilir bir iş ortağı bulur.
            </p>
            <div className="portfolio-social">
              <Link to='#' className="portfolio-resume-link"><img src={ResumeImage} alt="Caner Kuyucu Resume" className="portfolio-link-icon"/> Resume</Link>
              <Link to='#' className="portfolio-linkedin-link"><img src={LinkedinImage} alt="Caner Kuyucu Resume" className="portfolio-link-icon"/></Link>
              <Link to='#' className="portfolio-github-link"><img src={GithubImage} alt="Caner Kuyucu Resume" className="portfolio-link-icon"/></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

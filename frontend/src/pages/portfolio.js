import React from "react";
import "../styles/portfolio.css";

const Portfolio = () => {
  return (
    <section className="portfolio-container" id="portfolio-container">
      <h1 className="portfolio-title">Meet Our Team</h1>
      <div className="portfolio-section">
        <div className="portfolio-card">
          <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            alt="Kemal Müfit Şakır"
            className="portfolio-photo"
          />
          <div className="portfolio-box">
            <h2 className="portfolio-name">Müfit ŞAKIR</h2>
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
              adımda güvenilir bir iş ortağı bulur.{" "}
            </p>
            <div className="portfolio-social">
              <button className="portfolio-button">Resume</button>
              <button className="portfolio-button">LinkedIn</button>
              <button className="portfolio-button">Github</button>
            </div>
          </div>
        </div>
        <div className="portfolio-card">
          <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
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
              <button className="portfolio-button">Resume</button>
              <button className="portfolio-button">LinkedIn</button>
              <button className="portfolio-button">Github</button>
            </div>
          </div>
        </div>
        <div className="portfolio-card">
          <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            alt="Dağhan Yazgan"
            className="portfolio-photo"
          />
          <div className="portfolio-box">
            <h2 className="portfolio-name">Dağhan YAZGAN</h2>
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
              adımda güvenilir bir iş ortağı bulur.{" "}
            </p>
            <div className="portfolio-social">
              <button className="portfolio-button">Resume</button>
              <button className="portfolio-button">LinkedIn</button>
              <button className="portfolio-button">Github</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

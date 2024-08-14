import React from "react";
import "../styles/portfolio.css";

const Portfolio = () => {
  return (
    <section className="about">
     
        <div className="about-employee" id="portfolio-container">
          <h1 className="about-employee-title">Who we are</h1>
          <div className="about-employee-section">
            <div className="about-employee-card">
              <img
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                alt="about-employee-photo"
                className="about-employee-photo"
              />
              <div className="about-employee-box">
                <h3 className="about-employee-name">Müfit ŞAKIR</h3>
                <h5 className="about-employee-job">Web Developer</h5>
                <p className="about-employee-information">
                  Ben, farklı alanlarda uzmanlaşmış, yaratıcı çözümler sunabilen
                  ve projelerde yüksek performans gösteren bir profesyonelim.
                  Teknoloji, tasarım ve yönetim gibi çeşitli disiplinlerde
                  derinlemesine bilgi sahibiyim. Takım çalışmasına yatkın,
                  iletişim becerileri güçlü ve yeniliklere açık biriyim. Her
                  zaman en iyisini hedefler, zorluklarla başa çıkmada etkili
                  stratejiler geliştirir ve süreçlerin iyileştirilmesine katkıda
                  bulunurum. Benimle çalışanlar, projelerinde fark yaratan bir
                  destek alır ve her adımda güvenilir bir iş ortağı bulur.{" "}
                </p>
                <div className="about-employee-social">
                <button className="about-employee-button">Resume</button>

                  <button className="about-employee-button">LinkedIn</button>
                  <button className="about-employee-button">Github</button>
                </div>
              </div>
            </div>
            <div className="about-employee-card">
              <img
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                alt="about-employee-photo"
                className="about-employee-photo"
              />
              <div className="about-employee-box">
                <h3 className="about-employee-name">Caner KUYUCU</h3>
                <h5 className="about-employee-job">Full Stack Developer</h5>
                <p className="about-employee-information">
                  Ben, farklı alanlarda uzmanlaşmış, yaratıcı çözümler sunabilen
                  ve projelerde yüksek performans gösteren bir profesyonelim.
                  Teknoloji, tasarım ve yönetim gibi çeşitli disiplinlerde
                  derinlemesine bilgi sahibiyim. Takım çalışmasına yatkın,
                  iletişim becerileri güçlü ve yeniliklere açık biriyim. Her
                  zaman en iyisini hedefler, zorluklarla başa çıkmada etkili
                  stratejiler geliştirir ve süreçlerin iyileştirilmesine katkıda
                  bulunurum. Benimle çalışanlar, projelerinde fark yaratan bir
                  destek alır ve her adımda güvenilir bir iş ortağı bulur.
                </p>
                <div className="about-employee-social">
                  <button className="about-employee-button">Resume</button>
                  <button className="about-employee-button">LinkedIn</button>
                  <button className="about-employee-button">Github</button>
                </div>
              </div>
            </div>
            <div className="about-employee-card">
              <img
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                alt="about-employee-photo"
                className="about-employee-photo"
              />
              <div className="about-employee-box">
                <h3 className="about-employee-name">Dağhan YAZGAN</h3>
                <h5 className="about-employee-job">Mobile Developer</h5>
                <p className="about-employee-information">
                  Ben, farklı alanlarda uzmanlaşmış, yaratıcı çözümler sunabilen
                  ve projelerde yüksek performans gösteren bir profesyonelim.
                  Teknoloji, tasarım ve yönetim gibi çeşitli disiplinlerde
                  derinlemesine bilgi sahibiyim. Takım çalışmasına yatkın,
                  iletişim becerileri güçlü ve yeniliklere açık biriyim. Her
                  zaman en iyisini hedefler, zorluklarla başa çıkmada etkili
                  stratejiler geliştirir ve süreçlerin iyileştirilmesine katkıda
                  bulunurum. Benimle çalışanlar, projelerinde fark yaratan bir
                  destek alır ve her adımda güvenilir bir iş ortağı bulur.{" "}
                </p>
                <div className="about-employee-social">
                <button className="about-employee-button">Resume</button>
                  <button className="about-employee-button">LinkedIn</button>
                  <button className="about-employee-button">Github</button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Portfolio;

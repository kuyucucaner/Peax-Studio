import React, { useEffect, useRef, useState } from "react";
import "../styles/fade-in.css"; // CSS sınıflarının olduğu dosyayı burada ekliyoruz.

const FadeIn = ({ direction = "right", children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const node = ref.current; // Copy the ref value to a variable

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Element görünür olduğunda animasyonu tetikler
          observer.unobserve(entry.target); // Tekrar gözlemlemeye gerek yok
        }
      });
    });

    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, []);

  // Yön için uygun CSS sınıfını belirliyoruz
  const getFadeClass = () => {
    switch (direction) {
      case "left":
        return "fade-in-left";
      case "right":
        return "fade-in-right";
      case "up":
        return "fade-in-up";
      default:
        return "fade-in-right";
    }
  };

  return (
    <div
      ref={ref}
      className={`${getFadeClass()} ${isVisible ? `fade-in-visible-${direction}` : ""}`}
    >
      {children}
    </div>
  );
};

export default FadeIn;

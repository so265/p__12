import React, { useState, useEffect } from 'react';
import "../styleComponents/ScrollToTop.scss";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Affiche le bouton lorsque l'utilisateur défile vers le bas de 500 pixels
  const toggleVisibility = () => {
    if (window.scrollY > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Pour faire défiler jusqu'en haut de la page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="scroll-to-top">
      {isVisible && (
        <div onClick={scrollToTop} className="arrow-up">
          <i className="fas fa-arrow-up"></i>
        </div>
      )}
    </div>
  );
};

export default ScrollToTop;
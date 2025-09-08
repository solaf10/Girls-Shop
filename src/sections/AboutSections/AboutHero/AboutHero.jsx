import React from 'react';
import { useTranslation } from 'react-i18next';
import heroimg from '../../../../public/assets/Images/about-hero-bg.png';
import dotted from '../../../../public/assets/Images/Dotted.png';
import './AboutHero.css';

const AboutHero = () => {
  const { t } = useTranslation(); 

  return (
    <section className="about-hero">
      <div className="container">
        <div className="text">
          <div className="sub-title">
            
            <h2>{t('about.title')}</h2>
            <p>{t('about.description')}</p>
          </div>
        </div>

        <div className="image">
          <img src="/assets/Images/choice-image.png" alt="" />
        </div>
      </div>
      <img className="dotted-bg" src="/assets/Images/Dotted.png" alt="" />
    </section>
  );
};

export default AboutHero;
import React from "react";
import { useTranslation } from "react-i18next";
import "./ContactForm.css";

const ContactForm = () => {
  const { t } = useTranslation(); 

  return (
    <div className="contact-more-info-about-us">
      <div className="contact-section">
        <div className="head-contact-us-page">
          <div className="we-love-hear-you-sec">
       
            <h1>{t('contactForm.weLoveToHear')}</h1>
            <p>{t('contactForm.weLoveToHearDesc')}</p>
          </div>
          <div className="leave-massege-sec">
            <h1>{t('contactForm.leaveMessage')}</h1>
            <p>{t('contactForm.leaveMessageDesc')}</p>
          </div>
        </div>
        <div className="shop-info-and-form">
          <div className="contact-shop-info">
            <div className="address-and-business-hours">
              <div className="all-details-info">
                <h2>{t('contactForm.addressTitle')}</h2>
                <div className="more-details">
                  <img src="/assets/Images/locationIcon.svg" alt="Location Icon" />
                  <p>{t('contactForm.addressDetails')}</p>
                </div>
              </div>
              <div className="all-details-info">
                <h2>{t('contactForm.businessHoursTitle')}</h2>
                <div className="more-details">
                  <img src="/assets/Images/calendarIcon.svg" alt="Calendar Icon" />
                  <p>{t('contactForm.businessHoursDetails')}</p>
                </div>
              </div>
            </div>
            <div className="phone-and-email">
              <div className="all-details-info">
                <h2>{t('contactForm.phoneNumberTitle')}</h2>
                <div className="more-details">
                  <img src="/assets/Images/callIcon.svg" alt="Phone Icon" />
                  <p>{t('contactForm.phoneNumberDetails')}</p>
                </div>
              </div>
              <div className="all-details-info">
                <h2>{t('contactForm.emailTitle')}</h2>
                <div className="more-details">
                  <img src="/assets/Images/msgIcon.svg" alt="Message Icon" />
                  <p>{t('contactForm.emailDetails')}</p>
                </div>
              </div>
            </div>
            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3830.957713925917!2d36.699551054555315!3d34.730805157750176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15230ece3d5f4d81%3A0x28471a51de1514ff!2sAl%20Hamra%2C%20Hims%2C%20Syri%C3%AB!5e0!3m2!1snl!2snl!4v1744609815670!5m2!1snl!2snl"
                width="200"
                height="200"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
              ></iframe>
            </div>
          </div>
          <div className="contact-form">
            <div className="name-and-email-input">
              <input type="text" placeholder={t('contactForm.namePlaceholder')} required />
              <input type="email" placeholder={t('contactForm.emailPlaceholder')} required />
            </div>
            <div className="phone-and-subject-input">
              <input type="text" placeholder={t('contactForm.phonePlaceholder')} required />
              <input type="text" placeholder={t('contactForm.subjectPlaceholder')} required />
            </div>
            <div className="textarea">
              <label>{t('contactForm.yourMessageLabel')}</label>
              <textarea />
            </div>
            <button className="submit-btn">
              <a>{t('contactForm.sendButton')}</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
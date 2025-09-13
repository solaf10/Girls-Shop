import React from 'react';
import { useTranslation } from 'react-i18next'; // استيراد الـ hook
import './InspiredLiving.css';
import our from '../../../../public/assets/Images/our-bg.png';
import vir from '../../../../public/assets/Images/vision 1.svg';
import mis from '../../../../public/assets/Images/targeting 1.svg';
import val from '../../../../public/assets/Images/value.svg';

const InspiredLiving = () => {
  const { t } = useTranslation(); // استخدام الـ hook

  return (
    <section className='inspiredliving'>
      <div className="container">
        <div className="main-title">
         
          <h2>{t('inspiredLiving.mainTitle')}</h2>
          <p>{t('inspiredLiving.mainDesc')}</p>
        </div>
        <div className="info">
          <div className="image">
            <img src={our} alt="" />
          </div>
          <div className="text">
            <div className="holder">
              <div className="box">
                <div className="holder-icon">
                  <img src={vir} alt="" className='icon' />
                </div>
                <div className="content">
                
                  <h3>{t('inspiredLiving.visionTitle')}</h3>
                  <p>{t('inspiredLiving.visionDesc')}</p>
                </div>
              </div>
              <div className="box">
                <div className="holder-icon">
                  <img src={mis} alt="" className='icon' />
                </div>
                <div className="content">
               
                  <h3>{t('inspiredLiving.missionTitle')}</h3>
                  <p>{t('inspiredLiving.missionDesc')}</p>
                </div>
              </div>
              <div className="box">
                <div className="holder-icon">
                  <img src={val} alt="" className='icon' />
                </div>
                <div className="content">
                
                  <h3>{t('inspiredLiving.valueTitle')}</h3>
                  <p>{t('inspiredLiving.valueDesc')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="dotted-bg" src="/assets/Images/Dotted.png" alt="" />
    </section>
  );
};

export default InspiredLiving;
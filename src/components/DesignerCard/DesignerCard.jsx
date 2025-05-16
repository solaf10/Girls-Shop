import './DesignerCard.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
const DesignerCard = ({designerImage,designerName,designerLocation,designerNumber,designerWork}) => {
   
  return (
    <div className="designer-card">
        <div className='designer-info'>
            <img src={designerImage}/>
            <div className='more-info-designer'>
                <p className='designer-name'> {designerName}</p>
                <div className='designer-location'>
                    <img src='/assets/Images/locationIcon.svg'/>
                    <p>{designerLocation}</p>
                </div>
                <div className='designer-num'>
                    <img src='/public/assets/Images/callIcon.svg'/>
                    <p>{designerNumber}</p>
                </div>
            </div>
        </div>
 <Swiper className="designer-work-swipper" spaceBetween={40} slidesPerView={7}>
  {designerWork.map((work, index) => (
    <SwiperSlide key={index}>
      <img
        src={typeof work === 'string' ? work : work.img}
        alt={`Work ${index}`}
      />
    </SwiperSlide>
  ))}
</Swiper>
  

        </div>
  )
}

export default DesignerCard

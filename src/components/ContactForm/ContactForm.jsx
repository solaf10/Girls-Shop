import './ContactForm.css'
import { CiLocationOn } from "react-icons/ci";
import { PiCalendarDotsBold } from "react-icons/pi";
import { FiPhone } from "react-icons/fi";
import { LiaEnvelopeOpenTextSolid } from "react-icons/lia";
const ContactForm = () => {
  return (
    <div className='contact-more-info-about-us'>
       <div className='contact-section' >
       <div className="head-contact-us-page">
          <div className="we-love-hear-you-sec">
            <h1>We Love To Hear From You</h1>
            <p>Norem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringi</p>
          </div>
          <div className="leave-massege-sec">
            <h1>Leave A Message</h1>
            <p>Use the form below to get in touch with the sales team</p>
          </div>
        </div>
        <div className='shop-info-and-form'>
          <div className='contact-shop-info'>
          <div className="address-and-business-hours">
            <div className="all-details-info"> 
              <h2>Address</h2>
              <div className="more-details">
                <CiLocationOn  className='contact-icon'/>
                <p>Syria , Homs , AlHamra Street , 12 </p>
              </div>
            </div>
            <div className="all-details-info">
              <h2>Business Hours</h2>
              <div className="more-details">
              <PiCalendarDotsBold className='contact-icon' />
              <p>su - sat : 8am - 5pm
                
              </p>
              </div>
            </div>
          </div>
          <div className="phone-and-email">
            <div className="all-details-info">
              <h2>Phone-Number</h2>
              <div className="more-details">
              <FiPhone className='contact-icon' />
              <p>+963988136449</p>
              </div>
            </div>
            <div className="all-details-info">
              <h2>E-Mail</h2>
              <div className="more-details">
              <LiaEnvelopeOpenTextSolid className='contact-icon'/>
              <p>girlshop@gmail.com</p>
              </div>
            </div>
          </div>
          <div className='map'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3830.957713925917!2d36.699551054555315!3d34.730805157750176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15230ece3d5f4d81%3A0x28471a51de1514ff!2sAl%20Hamra%2C%20Hims%2C%20Syri%C3%AB!5e0!3m2!1snl!2snl!4v1744609815670!5m2!1snl!2snl" width="200" height="200"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        

          </div>
          <div className='contact-form'>
            <div className='name-and-email-input'> 
             <input type='text' placeholder='Name'/>
             <input type='email' placeholder='E-mail'/>
            </div>
            <div className='phone-and-subject-input'> 
             <input type='text' placeholder='Phone'/>
             <input type='text' placeholder='Subject'/>
            </div>
            <div className='textarea'> 
            <label>Your Message</label>
            <textarea />
            </div>
      <button className='submit-btn'><a>Send</a></button>
          </div>
        </div>
    </div>
    </div>
   
  )
}

export default ContactForm


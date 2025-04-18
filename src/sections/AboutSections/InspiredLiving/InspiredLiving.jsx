import React from 'react'
import './InspiredLiving.css'
import our from '../../../../public/assets/Images/our-bg.png'
import vir from '../../../../public/assets/Images/vision 1.svg'
import mis from '../../../../public/assets/Images/targeting 1.svg'
import val from '../../../../public/assets/Images/value.svg'
const InspiredLiving = () => {
return (
    <section className='inspiredliving'>
<div className="container">
    <div className="main-title">
        <h2>Inspired Living: Our Mission & Vision</h2>
        <p>“Furnishing Dreams, Defining Elegance"</p>
    </div>
    <div className="info">
    <div className="image">
    <img src={our} alt="" />
</div>
<div className="text">
    <div className="holder">
        <div className="box">
            <div className="holder-icon">
                <img src={vir} alt="" className='icon'/>
            </div>
            <div className="content">
                <h3>our vission</h3>
                <p>"Our vision is to redefine home and office spaces by offering high-quality, stylish, and affordable furniture that blends comfort with innovation.
                We aim to create a seamless online shopping experience, where customers can discover unique designs, sustainable materials, and personalized solutions to transform their spaces into something truly special."</p>
            </div>
        </div>
        <div className="box">
            <div className="holder-icon">
                <img src={mis} alt="" className='icon' />
            </div>
            <div className="content">
                <h3>our mission</h3>
                <p>"Our mission is to create beautifully designed, high-quality furniture that enhances the comfort and style of every home. We are committed to sustainability, craftsmanship, and affordability, ensuring that our customers find pieces that reflect their unique taste while supporting ethical production practices.
                By combining timeless aesthetics with modern functionality, we aim to make every space feel like home."</p>
            </div>
        </div>
        <div className="box">
        <div className="holder-icon">
            <img src={val} alt="" className='icon' />
        </div>
        <div className="content">
            <h3>our value</h3>
            <p>"Our vision is to redefine home and office spaces with elegant, high-quality, and sustainable furniture that blends style, comfort, and functionality.
            We strive to offer a seamless online shopping experience, inspiring customers to create beautiful and personalized living spaces with our thoughtfully crafted collections."</p>
        </div>
        </div>
    </div>
</div>
    </div>
</div>
<img className="dotted-bg" src="/assets/Images/Dotted.png" alt="" />
    </section>
)
}

export default InspiredLiving

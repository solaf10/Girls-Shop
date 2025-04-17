import React from 'react'
import heroimg from '../../../../public/assets/Images/about-hero-bg.png'
import dotted from '../../../../public/assets/Images/Dotted.png'
import './AboutHero.css'
const AboutHero = () => {
  return (
    <section className="about-hero">
      <div className="container">
        <div className="text">
          <div className="sub-title">
            <h2>The Best Furniture Manufacturer of your choice</h2>
            <p>
              At Girl’shop, we craft high-quality, stylish, and durable
              furniture designed to elevate any space. With expert craftsmanship
              and premium materials, we bring comfort, elegance, and
              functionality to your home or business. Choose excellence. Choose
              Girl’shop.
            </p>
          </div>
        </div>

        <div className="image">
          <img src="/assets/Images/choice-image.png" alt="" />
        </div>
      </div>
      <img className="dotted-bg" src="/assets/Images/Dotted.png" alt="" />
    </section>
  )
}

export default AboutHero

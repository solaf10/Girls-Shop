import React from 'react'
import './MoreThan.css';
import { FaCheckCircle } from 'react-icons/fa';
const MoreThan = () => {
  return (
    <section className='more-than'>
    <div className="container">
<div className="text">
          <div className="sub-title">
            <h2>
              More Than Just a Furniture Store – Your Source for Architectural
              Blocks
            </h2>
            <p>
              "Explore a unique blend of quality furniture and essential
              architectural resources, all in one place."
            </p>
          </div>
          <div className="holder">
            <div className="box">
              <div className="icon-holder">
                <FaCheckCircle className="icon" />
              </div>
              <div className="content">
                <h3>Premium Furniture:</h3>
                <p>Discover beautifully crafted furniture for every space.</p>
              </div>
            </div>
            <div className="box">
              <div className="icon-holder">
                <FaCheckCircle className="icon" />
              </div>
              <div className="content">
                <h3>Architectural Blocks:</h3>
                <p>
                  Access downloadable architectural blocks for your design
                  projects.
                </p>
              </div>
            </div>
            <div className="box">
              <div className="icon-holder">
                <FaCheckCircle className="icon" />
              </div>
              <div className="content">
                <h3>All-in-One Resource:</h3>
                <p>
                  Elevate your projects with furniture and design tools in one
                  place.
                </p>
              </div>
            </div>
          </div>
        </div>
    </div>
    </section>
  )
}

export default MoreThan

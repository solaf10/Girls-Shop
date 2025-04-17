import React from 'react'
import video from '../../../../public/assets/Images/video.png'
import './Video.css'
const Video = () => {
  return (
    <section className='video'>
        <div className="container">
            <div className="video-img">
                <img src={video} alt="" />
            </div>
            
        </div>
    </section>
  )
}

export default Video

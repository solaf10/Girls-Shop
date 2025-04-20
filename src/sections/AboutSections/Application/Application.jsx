import React from 'react'
import './Application.css'
const Application = () => {
return (
    <section className='application'>
        <div className="container">
            <div className="text">
                <div className="title">
                    <h2>Download PROJECT APP</h2>
                    <p>Enjoy the benefits of our platform on your favorite mobile device.</p>
                </div>
                <div className="desc">
                    <p>Explore new models,
                    create mood boards and collections for your projects while accessing our platform on the go.</p>
                </div>
            </div>
            <div className="image">
                <div className="qrcode">
                    <img src="" alt="" />
                </div>
                <div className="app">
                    <p>Scan To download</p>
                    <div className="app-img">
                    <img src="" alt=""  className='store'/>
                    <img src="" alt="" className='play' />
                    </div>
                </div>
            </div>
        </div>
        <div className="phone-img">
            <img src="" alt="" />
            <img src="" alt="" />
        </div>
    </section>
)
}

export default Application

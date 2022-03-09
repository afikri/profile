import React from 'react'

const Hero = () => {
  return (
    <div>
      <aside className="sidebar" id="sidebar">
        <div>
          <button className="close-btn" id="close-btn">
            <i className="fas fa-times"></i>
          </button>
          <ul className="sidebar-links">
            <li>
              <a href="index.html">home</a>
            </li>
            <li>
              <a href="about.html">about</a>
            </li>
            <li>
              <a href="projects.html">projects</a>
            </li>
            <li>
              <a href="contact.html">contact</a>
            </li>
          </ul>
          
        </div>
      </aside>
      <header className="hero">
        <div className="section-center hero-center">
          <article className="hero-info">
            <div className="underline"></div>
            <h1>i'm fikri abdul</h1>
            <h4>fullstack developer based in Jakarta</h4>
            <a href="contact.html" className="btn hero-btn">hire me</a>
            <ul className="social-icons hero-icons">
              <li>
                <a href="https://stackoverflow.com/users/1273257/afikri?tab=profile" className="social-icon">
                  <i className="fab fa-stack-overflow"></i>
                </a>
              </li>

              <li>
                <a href="https://github.com/afikri" className="social-icon">
                  <i className="fab fa-github"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/afikri/" className="social-icon">
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/channel/UCJoS2J1sPjWY2mZ2LTIMcIg" className="social-icon">
                  <i className="fab fa-youtube"></i>
                </a>
              </li>

              <li>
                <a href="https://www.twitter.com/fikri1510" className="social-icon">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="https://wa.me/6281236392504?text=I'm%20interested%20in%20having%20discussion%20with%20you" className="social-icon">
                  <i className="fab fa-whatsapp"></i>
                </a>
              </li>
              <li>
                <a href="https://join.skype.com/invite/iirSF5W0MNSA" className="social-icon">
                  <i className="fab fa-skype"></i>
                </a>
              </li>
            </ul>
          </article>
          <article className="hero-img">
            <img src="./images/hero2.png" className="hero-photo" alt="john doe" />
          </article>
        </div>
      </header>
    </div>
  )
}

export default Hero
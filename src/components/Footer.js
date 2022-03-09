import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="social-icons">
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
          <a href="https://wa.me/6281236392504" className="social-icon">
            <i className="fab fa-whatsapp"></i>
          </a>
        </li>
        <li>
          <a href="https://join.skype.com/invite/iirSF5W0MNSA" className="social-icon">
            <i className="fab fa-skype"></i>
          </a>
        </li>
      </ul>

      <p>&copy; <span id="date"></span> Fikri Abdul. all rights reserved</p>
    </footer>
  )
}

export default Footer
import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-text'>
         This website was created for Hacke-demic 2020.
        </p>     
      </section>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Team Naps
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>IIIT Allahabad © 2020</small>
        </div>
      </section>
    </div>
  );
}

export default Footer;

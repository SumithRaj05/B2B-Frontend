import React from 'react';
import ContactUs from '../pages/contact/ContactUs';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    
    <footer className="bg-light text-dark p-4">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h4>Follow us on</h4>
            <div class="wrapper">
  <a href="#" class="icon facebook">
    <div class="tooltip">Facebook</div>
    <span><i class="fab fa-facebook-f"></i></span>
  </a>
  <a href="#" class="icon twitter">
    <div class="tooltip">Twitter</div>
    <span><i class="fab fa-twitter"></i></span>
  </a>
  <a href="#" class="icon instagram">
    <div class="tooltip">Instagram</div>
    <span><i class="fab fa-instagram"></i></span>
  </a>
  <a href="#" class="icon github">
    <div class="tooltip">Github</div>
    <span><i class="fab fa-github"></i></span>
  </a>
  <a href="#" class="icon youtube">
    <div class="tooltip">Youtube</div>
    <span><i class="fab fa-youtube"></i></span>
  </a>
</div>
          </div>

          {/* <div className="col-md-3">
            <h4>Services</h4>
            <p>Example 4</p>
            <p>Example 5</p>
            <p>Example 6</p>
            <p>Example 6</p>
          </div> */}

          <div className="col-md-3">
            <h4>About</h4>
            <p><b>Bejiness.com </b>is our brainchild, a dynamic platform dedicated to empowering B2B players. Our vision is clear: to empower businesses to trade efficiently, manage effectively, expand ambitiously, and promote strategically. We've engineered Bejiness.com to be your<b> one-stop solution</b> for all things B2B.</p>
          </div>
 
          <div className="col-md-3">
            <h4>Pages</h4>
            <Link to='/contactus'><p>contact</p></Link>
            <Link to='/aboutus'><p>About</p></Link>
            <p>Blog</p>
            
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-12 text-center">
            <p>© 2024<b>Sambhav Bejitech Private Limited and Bejiness.com </b> . All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

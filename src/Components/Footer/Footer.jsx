import './Footer.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faXTwitter, faPinterest, faInstagram, faFacebookF, faYoutube } from '@fortawesome/free-brands-svg-icons';
// import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import "./../../index.css"
import { Link } from 'react-router-dom';
import logo from './../../../public/assetsProject/imges/LOGO.png';


const Footer = () => {


  

  
  return (
    <footer className="rb-footer Project-Container">
    <div className="rb-footer-columns">
      <div className="rb-footer-column">
        <h4><img className='rb-logo' src= {logo} /></h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <div className="rb-footer-column ">
        <h4>GET HELP</h4>
        <Link className='rb-nav-link' to={'/Contact'}>Contact Us</Link>
        <a href="#">Latest Articles</a>
        <Link className='rb-nav-link' to={'/FAQs'}>FAQ</Link>
      </div>
      <div className="rb-footer-column rb-column-pad">
        <h4>PROGRAMS</h4>
        <a href="#">Art & Design</a>
        <a href="#">Business</a>
        <a href="#">IT & Software</a>
        <a href="#">Languages</a>
        <a href="#">Programming</a>
      </div>
      <div className="rb-footer-column ">
        <h4>CONTACT US</h4>
        <a className='rb-footer-addr' href="#">Address: 2321 New Design Str,Lorem Ipsum10  Hudson Yards, USA <p></p></a>
        <a href="tel:+12325005678988">Tel: + (123) 2500-567-8988</a>
        <a  href="mailto:supportlms@gmail.com">Mail: supportlms@gmail.com</a>
        <div className="rb-social-icons">
        <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
          <a href="#"><FontAwesomeIcon icon={faPinterest} /></a>
          <a href="#"><FontAwesomeIcon icon={faXTwitter} /></a>
          <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
          

        </div>
      </div>
      </div>
      
      <hr className='rb-footer-hr'/>
      <p className='rb-Copyright'>Copyright © 2024 LearnPress LMS | Powered by ThimPress</p>
    </footer>
  );
};

export default Footer;

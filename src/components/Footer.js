import React from 'react';

import logo from '../images/logo.png';

const Footer = () => {
  return (
    <footer className="blue footer">
      <div className="container text-center">
        <div className="row">
          <ul className="col-4 list-unstyled">
            <h4 className="whiteText">Links</h4>
            <li><a>Home</a></li>
            <li><a>Profile</a></li>
            <li><a>Search</a></li>
          </ul>
          <ul className="col-4 list-unstyled">
            <h4 className="whiteText">About the App</h4>
            <li><a>Github</a></li>
            <li><a>Terms</a></li>
            <li><a>Support</a></li>
          </ul>
          <ul className="col-4 list-unstyled">
            <h4 className="whiteText">Connect With Us</h4>
            <li><a>Twitter</a></li>
            <li><a>Instagram</a></li>
            <li><a>Facebook</a></li>
          </ul>
        </div>


        <p className="whiteText"><img src={logo} width="30" height="30" alt=""/> &nbsp;&copy; 2018 Parallel</p>
      </div>
    </footer>
  );
}

export default Footer;

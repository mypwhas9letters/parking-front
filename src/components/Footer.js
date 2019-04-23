import React from 'react';

import logo from '../images/logo.png';

const Footer = () => {
  return (
    <footer className="blue footer">
      <div className="container text-center">
        <div className="row">
          <ul className="col-4 list-unstyled">
            <h4 className="whiteText">Links</h4>
            <li><a href="/">Home</a></li>
            <li><a href="/">Profile</a></li>
            <li><a href="/">Search</a></li>
          </ul>
          <ul className="col-4 list-unstyled">
            <h4 className="whiteText">About the App</h4>
            <li><a href="/">Github</a></li>
            <li><a href="/">Terms</a></li>
            <li><a href="/">Support</a></li>
          </ul>
          <ul className="col-4 list-unstyled">
            <h4 className="whiteText">Connect With Us</h4>
            <li><a href="/">Twitter</a></li>
            <li><a href="/">Instagram</a></li>
            <li><a href="/">Facebook</a></li>
          </ul>
        </div>


        <p className="whiteText"><img src={logo} width="30" height="30" alt=""/> &nbsp;&copy; 2018 Parallel</p>
      </div>
    </footer>
  );
}

export default Footer;

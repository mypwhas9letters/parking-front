import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="blue footer">
      <div className="container text-center">
        <ul className="list-inline">
          <li className="list-inline-item"><Link to="/">Home</Link></li>
          <li className="list-inline-item"><Link to="/">Profile</Link></li>
          <li className="list-inline-item"><Link to="/">Search</Link></li>
        </ul>
        <ul className="list-inline">
          <li className="list-inline-item"><p className="mb-1">&copy; 2018 Parallel</p></li>
          <li className="list-inline-item"><Link to="/">Privacy</Link></li>
          <li className="list-inline-item"><Link to="/">Terms</Link></li>
          <li className="list-inline-item"><Link to="/">Support</Link></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;

import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <div className="logo">Clear Path Financial Services</div>
    <nav>
      <ul>
        <li><Link to="/">Services</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/classes">Classes</Link></li>
        <li><Link to="/members">Members</Link></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;

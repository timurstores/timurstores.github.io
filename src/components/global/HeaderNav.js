import React from 'react';
import { Link } from 'react-router-dom';

import CartCounter from '../Cart/CartCounter';

const HeaderNav = () => (
  <div className="nav-container">
    <nav className="primary-nav light">
      <Link to="/products">Продукты</Link>
      <Link to="/styles">Категории</Link>
    </nav>
    <div className="logo light">
      <Link to="/" className="logo-link">
        <span className="hide-content">АРАЙ</span>
        <div className="big-logo" aria-hidden="true">
          <img
            className="small-logo"
            src="img/logo/ill-short-dark.svg"
            alt="aray"
            aria-hidden="true"
          />

        </div>
        <div className="small-logo" aria-hidden="true">
          
        </div>
      </Link>
    </div>
    <nav className="secondary-nav light">
      <CartCounter />
    </nav>
  </div>
);

export default HeaderNav;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import CartCounter from '../Cart/CartCounter';

class ProductsHeader extends Component {
  render() {
    return (
      <header className="push">
        <div className="nav-container">
          <nav className="primary-nav">
            <Link to="/products">Продукты</Link>
            <Link to="/styles">Категории</Link>
          </nav>
          <div className="logo">
            <Link to="/" className="logo-link">
              <span className="hide-content">АРАЙ</span>
              <div className="big-logo" aria-hidden="true">
                
              </div>
              <div className="small-logo" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 54">
                  <path fill="currentColor" d="M28.2,48.2V6.4h4.7v41.8H28.2z" />

                </svg>
              </div>
            </Link>
          </div>
          <nav className="secondary-nav">
            <CartCounter />
          </nav>
        </div>
        <div className="header-container hide-content">
          <div className="content">
            <h1>Список продуктов</h1>
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(ProductsHeader);

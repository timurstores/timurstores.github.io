import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import CartCounter from '../Cart/CartCounter';




const StylesHeader = ({ style, header }) => {
  let Header = null;

  switch (header) {

    default:
      Header = null;
  }

  return (
    <header
      className="medium-header light push"
      style={{
        backgroundImage: `url(${Header})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundOrigin: 'border-box',
        backgroundAttachment: 'scroll'
      }}>
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
            
            </div>
          </Link>
        </div>
        <nav className="secondary-nav light">
          <CartCounter />
        </nav>
      </div>
      <div className="header-container light">
        <div className="content">
          <h1>
            {style}
            <span className="hide-content"> категории</span>
          </h1>
        </div>
      </div>
    </header>
  );
};

const mapStateToProps = ({ styles: { style, header } }) => ({
  style,
  header
});

export default connect(mapStateToProps)(StylesHeader);

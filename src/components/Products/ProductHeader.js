import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import CartCounter from '../Cart/CartCounter';

class ProductHeader extends Component {
  componentWillMount() {
    const script = document.createElement('script');

    script.src = '../../js/production.min.js';
    script.async = false;

    document.body.appendChild(script);
  }

  render() {
    var ID = this.props.router.location.pathname.slice(9, 100);

    var productArray = this.props.products.products.data.filter(function(
      product
    ) {
      return product.id === ID;
    });

    var product = productArray[0];

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
              
              </div>
            </Link>
          </div>
          <nav className="secondary-nav">
            <CartCounter />
          </nav>
        </div>
        <div className="header-container hide-content">
          <div className="content">
            <h1>Детали продукта {product.name}</h1>
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(ProductHeader);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductImage from '../Products/ProductImage';
import { push } from 'react-router-redux';

import { SET_STYLE } from '../../ducks/styles';

function mapStateToProps(state) {
  return state;
}

class Categories extends Component {
  render() {
    var ToStyles = () => {
      this.props.dispatch(dispatch => {
        dispatch(push('/styles'));
      });
    };

    var ChangeStyle = name => {
      this.props.dispatch(dispatch => {
        dispatch({ type: SET_STYLE, style: name });
      });

      ToStyles();
    };

    var products = this.props.products.products;
    var productData = this.props.products.products.data;
    let product;

    try {
      product = this.props.categories.categories.included.products[0];
    } catch (err) {
      product = null;
    }

    if (this.props.categories.categories.data.length > 0) {
      return (
        <div className="styles-list">
          {this.props.categories.categories.data.map(function(category) {
            if (category.relationships.products) {
              var CatProductRef = category.relationships.products.data[0];

              var CatProduct = productData.find(function(product) {
                return product.id === CatProductRef.id;
              });

              let background;

              if (CatProduct.background_colour) {
                background = CatProduct.background_colour;
              } else {
                background = '#d9d9d9';
              }

              return (
                <a
                  className="styles-item"
                  href="styles"
                  style={{ background: background }}
                  name={category.name}
                  key={category.id}
                  onClick={e => {
                    ChangeStyle(category.name);
                  }}>
                  <h3
                    onClick={e => {
                      e.preventDefault();
                    }}>
                    {category.name}
                    <span className="hide-content"> Продукты</span>
                  </h3>
                  <ProductImage
                    product={CatProduct}
                    products={products}
                    alt={product.description}
                    aria-hidden="true"
                  />
                  <div
                    className="overlay fake-btn"
                    style={{ background: '#4d4d4d' }}>
                    Перейти{' '}
                    <span className="hide-content">
                       {category.name}{' '}
                    </span>к продуктам
                  </div>
                </a>
              );
            } else {
              return (
                <div className="content">
                  <p>Нет продуктов относящихся к категории</p>
                </div>
              );
            }
          })}
        </div>
      );
    } else {
      return (
        <div className="styles-list">
          <div className="content">
            <p>Нет категорий</p>
          </div>
        </div>
      );
    }
  }
}

export default connect(mapStateToProps)(Categories);

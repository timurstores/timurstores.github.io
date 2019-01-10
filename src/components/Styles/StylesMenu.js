import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setStyle } from '../../ducks/styles';

const StylesMenu = ({ categories, setStyle }) => (
  <div className="style-links-container">
    {categories.categories.data.map(function(category) {
      return (
        <a
          name={category.name}
          className="style-link"
          key={category.id}
          onClick={e => setStyle(e.target.name)}>
          <span className="hide-content">Показать </span>
          {category.name}
          <span className="hide-content"> категории</span>
        </a>
      );
    })}
  </div>
);

const mapStateToProps = ({ categories }) => ({
  categories
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setStyle
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(StylesMenu);

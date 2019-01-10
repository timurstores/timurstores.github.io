import React, { Component } from 'react';
import TopPicks from './TopPicks';

class TopPicksContainer extends Component {
  render() {
    return (
      <section className="top-picks">
        <div className="content">
          <h2>Популярное</h2>
          <div className="product-list">
            <TopPicks />
          </div>
        </div>
      </section>
    );
  }
}

export default TopPicksContainer;

import React from 'react';
import * as WeLoveYou from '../../assets/img/weloveyou.svg';

const OrderConfirmation = () => (
  <main role="main" id="container" className="main-container push">
    <section className="order-confirmation">
      <div className="content">
        <div className="confirmation">
          <h2>Отлично, ваш заказ был размещен</h2>
          <img src={WeLoveYou} alt="We Love You" />
        </div>
      </div>
    </section>
  </main>
);

export default OrderConfirmation;

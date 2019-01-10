import React, { Component } from 'react';
import CheckoutSummary from './CheckoutSummary';
import { Field, reduxForm } from 'redux-form';
import * as api from '../../moltin';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';

import { SUBMIT_PAYMENT, PAYMENT_COMPLETE } from '../../ducks/payments';

function mapStateToProps(state) {
  return { push: state.push };
}

var CheckoutTemplate = {
  customer: {
    name: 'Тимур Сандыбаев',
    email: '+77773361685'
  },
  shipping_address: {
    first_name: 'Тимур',
    last_name: 'Сандыбаев',
    line_1: 'Мира 132',
    line_2: 'Перекресток Аяган Шажинбаева',
    city: 'Петропавловск',
    postcode: '150000',
    county: 'СКО',
    country: 'Казахстан'
  },
  billing_address: {
    first_name: 'Тимур',
    last_name: 'Сандыбаев',
    line_1: 'Мира 132',
    line_2: 'Перекресток Аяган Шажинбаева',
    city: 'Newcastle Upon Tyne',
    postcode: '150000',
    county: 'СКО',
    country: 'Казахстан'
  }
};
var PaymentTemplate = {
  gateway: 'stripe',
  method: 'purchase',
  first_name: 'Timur',
  last_name: 'Sandybaev',
  number: '4242424242424242',
  month: '08',
  year: '2020',
  verification_value: '123'
};

class CheckoutForm extends Component {
  handleKeyDown = function(e) {
    if (e.key === 'Enter' && e.shiftKey === false) {
      e.preventDefault();
    }
  };

  mySubmit = values => {
    CheckoutTemplate.customer.name = values.name;
    CheckoutTemplate.customer.email = values.email;

    CheckoutTemplate.billing_address.first_name = values.billing_firstname;
    CheckoutTemplate.billing_address.last_name = values.billing_lastname;
    CheckoutTemplate.billing_address.line_1 = values.billing_address_1;
    CheckoutTemplate.billing_address.line_2 = values.billing_address_2;
    CheckoutTemplate.billing_address.city = values.billing_state;
    CheckoutTemplate.billing_address.county = values.billing_postcode;
    CheckoutTemplate.billing_address.country = values.billing_country;

    CheckoutTemplate.shipping_address.first_name = values.shipping_firstname;
    CheckoutTemplate.shipping_address.last_name = values.shipping_lastname;
    CheckoutTemplate.shipping_address.line_1 = values.shipping_address_1;
    CheckoutTemplate.shipping_address.line_2 = values.shipping_address_2;
    CheckoutTemplate.shipping_address.city = values.shipping_state;
    CheckoutTemplate.shipping_address.county = values.shipping_postcode;
    CheckoutTemplate.shipping_address.country = values.shipping_country;

    this.props.dispatch(dispatch => {
      dispatch({ type: SUBMIT_PAYMENT });
    });

    api
      .Checkout(CheckoutTemplate)

      .then(order => {
        api.OrderPay(order.data.id, PaymentTemplate);
        api.DeleteCart();
      })

      .then(() => {
        this.props.dispatch(dispatch => {
          dispatch({ type: PAYMENT_COMPLETE });
          dispatch(push('/order-confirmation'));
        });
      })

      .catch(e => {
        console.log(e);
      })

      .catch(e => {
        console.log(e);
      })

      .catch(e => {
        console.log(e);
      });
  };

  render() {
    return (
      <main role="main" id="container" className="main-container push">
        <section className="checkout">
          <div className="content">
            <CheckoutSummary />
            <form
              className="checkout-form"
              noValidate
              onSubmit={this.props.handleSubmit(this.mySubmit)}
              onKeyDown={e => {
                this.handleKeyDown(e);
              }}>
              <fieldset className="details">
                <div className="form-header">
                  <h2>Информация о вас</h2>
                </div>
                <div className="form-content">
                  <div className="form-fields">
                    <label className="input-wrap name required">
                      <span className="hide-content">Имя</span>
                      <Field
                        component="input"
                        className="name"
                        required="required"
                        placeholder="Имя"
                        name="name"
                        type="text"
                        aria-label="Name"
                      />
                    </label>
                    <label className="input-wrap email required">
                      <span className="hide-content">Email</span>
                      <Field
                        component="input"
                        className="email"
                        required="required"
                        placeholder="Email"
                        name="email"
                        type="text"
                        aria-label="email"
                      />
                    </label>
                  </div>
                  <button type="button" className="continue">
                    Продолжить
                  </button>
                </div>
              </fieldset>
              <fieldset className="billing collapsed">
                <div className="form-header inactive">
                  <h2>Платежный адрес</h2>
                </div>
                <div className="form-content">
                  <div className="form-fields">
                    <label className="input-wrap firstname required">
                      <span className="hide-content">Имя</span>
                      <Field
                        component="input"
                        required="required"
                        placeholder="Имя"
                        name="billing_firstname"
                        type="text"
                        aria-label="First name"
                      />
                    </label>
                    <label className="input-wrap lastname required">
                      <span className="hide-content">Фамилия</span>
                      <Field
                        component="input"
                        required="required"
                        placeholder="Фамилия"
                        name="billing_lastname"
                        type="text"
                        aria-label="Last name"
                      />
                    </label>
                    <label className="input-wrap address-1 required">
                      <span className="hide-content">Адрес</span>
                      <Field
                        component="input"
                        required="required"
                        placeholder="Адрес 1"
                        name="billing_address_1"
                        type="text"
                        aria-label="Address line 1"
                      />
                    </label>
                    <label className="input-wrap address-2">
                      <span className="hide-content">Номер телефона</span>
                      <Field
                        component="input"
                        placeholder="Номер телефона"
                        name="billing_address_2"
                        type="text"
                        aria-label="Address line 2"
                      />
                    </label>
                    <label className="input-wrap state required">
                      <span className="hide-content">Область</span>
                      <Field
                        component="input"
                        required="required"
                        placeholder="Область"
                        name="billing_state"
                        type="text"
                        aria-label="State / County"
                      />
                    </label>
                    <label className="input-wrap postcode required">
                      <span className="hide-content">Почтовый индекс</span>
                      <Field
                        component="input"
                        required="required"
                        placeholder="Почтовый индекс"
                        name="billing_postcode"
                        type="text"
                        aria-label="Postcode"
                      />
                    </label>
                    <div className="input-wrap country">
                      <label className="required select-fallback">
                        <span className="hide-content">Страна</span>
                        <Field
                          component="select"
                          id="billing_country"
                          required="required"
                          name="billing_country">
                          <option value="">Страна</option>
                          <option value="KZ">Казахстан</option>
                        </Field>
                      </label>
                    </div>
                  </div>
                  <button type="button" className="continue">
                    Продолжить
                  </button>
                </div>
              </fieldset>
              <fieldset className="shipping collapsed">
                <div className="form-header inactive">
                  <h2>Адрес доставки</h2>
                </div>
                <div className="form-content">
                  <div className="form-fields">
                    <label className="input-wrap firstname required">
                      <span className="hide-content">Имя</span>
                      <Field
                        component="input"
                        required="required"
                        placeholder="Имя"
                        name="shipping_firstname"
                        type="text"
                        aria-label="First name"
                      />
                    </label>
                    <label className="input-wrap lastname required">
                      <span className="hide-content">Фамилия</span>
                      <Field
                        component="input"
                        required="required"
                        placeholder="Фамилия"
                        name="shipping_lastname"
                        type="text"
                        aria-label="Last name"
                      />
                    </label>

                    <label className="input-wrap address-1 required">
                      <span className="hide-content">Адрес</span>
                      <Field
                        component="input"
                        required="required"
                        placeholder="Адрес 1"
                        name="shipping_address_1"
                        type="text"
                        aria-label="Address line 1"
                      />
                    </label>
                    <label className="input-wrap address-2">
                      <span className="hide-content">Номер телефона</span>
                      <Field
                        component="input"
                        placeholder="Номер телефона"
                        name="shipping_address_2"
                        type="text"
                        aria-label="Address line 2"
                      />
                    </label>
                    <label className="input-wrap state required">
                      <span className="hide-content">Область</span>
                      <Field
                        component="input"
                        required="required"
                        placeholder="Область"
                        name="shipping_state"
                        type="text"
                        aria-label="State / County"
                      />
                    </label>
                    <label className="input-wrap postcode required">
                      <span className="hide-content">Почтовый индекс</span>
                      <Field
                        component="input"
                        required="required"
                        placeholder="Почтовый индекс"
                        name="shipping_postcode"
                        type="text"
                        aria-label="Postcode"
                      />
                    </label>
                    <div className="input-wrap country">
                      <label className="select-fallback required">
                        <span className="hide-content">Страна</span>
                        <Field
                          component="select"
                          id="shipping_country"
                          required="required"
                          name="shipping_country">
                          <option value="">Country</option>
                          <option value="KZ">Казахстан</option>

                        </Field>
                      </label>
                    </div>
                  </div>
                  <button type="submit" className="pay" aria-live="polite">
                    <div className="loading-icon">
                      <span className="hide-content">В процессе</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 52.7 46.9"
                        aria-hidden="true">
                        <path
                          fill="currentColor"
                          d="M47.8,15.9c0,2.8-1,5.6-3.2,7.6L26.4,41.7L8.1,23.5c-4.3-4.3-4.3-11.1,0-15.4c2.1-2.1,4.9-3.2,7.7-3.2c2.8,0,5.6,1,7.6,3.2
                            l2.9,2.9l2.9-2.9c4.3-4.3,11.1-4.3,15.4,0C46.7,10.3,47.8,13.1,47.8,15.9z"
                        />
                      </svg>
                    </div>
                    <span className="copy">Заказать</span>
                  </button>
                </div>
              </fieldset>

            </form>
          </div>
        </section>
      </main>
    );
  }
}

CheckoutForm = reduxForm({
  form: 'CheckoutForm'
})(CheckoutForm);

export default connect(mapStateToProps)(CheckoutForm);

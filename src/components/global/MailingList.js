import React from 'react';

const MailingList = () => (
  <section className="mailing-list">
    <div className="content">
      <div className="mailing-list-content">
        <h2>
          <span className="love">АРАЙ</span>
        </h2>
        <p>
          Зарегистрируйтесь чтоб получить {' '}
          <span className="word-mark">
            <span className="love">АРАЙ</span>
          </span>{' '}
          новости, обновления и скидки.
        </p>
        <form className="newsletter-form" method="post" noValidate>
          <input
            className="email"
            required="required"
            placeholder="Электронная почта"
            name="email"
            type="email"
            aria-label="Email"
          />
          <button type="submit" className="submit">
            Отправить
          </button>
        </form>
      </div>
    </div>
  </section>
);

export default MailingList;

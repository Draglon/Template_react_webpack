import React from 'react';

const NotFound = ({ translate: t }) => (
  <section className="section not-found">
    <div className="wrapper">
      <h2 className="not-found__title">{t.title}</h2>
      <h2 className="not-found__subTitle">{t.subTitle}</h2>
    </div>
  </section>
);

export default NotFound;

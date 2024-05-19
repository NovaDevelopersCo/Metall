import React from 'react';
import style from './Map.module.scss';

const Map = () => {
  return (
    <div className={style.container}>
      <div className={style.left}>
        <h3 className={style.title}>Наш адрес</h3>
        <div className={style.map}>
          <iframe
            className={style.Map}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2335.089124984971!2d37.78175376105619!3d55.71847203842065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414ab577b7e02c77%3A0x46d95bed5b2d3935!2z0KDRj9C30LDQvdGB0LrQuNC5INC_0YAuLCDQnNC-0YHQutCy0LAsINCg0L7RgdGB0LjRjw!5e1!3m2!1sru!2str!4v1715542665433!5m2!1sru!2str"
            width="100%"
            height="400"
            frameBorder="0"
            aria-hidden="false"
          ></iframe>
        </div>
      </div>
      <div className={style.right}>
        <div className={style.contactinfo}>
          <h3 className={style.contacttitle}>Контактная информация</h3>
          <h2 className={style.Glava}>Отдел продаж</h2>
          <h1 className={style.text}>Адрес офиса: г. Москва, ул. Ленина, 25, офис 305</h1>
          <h2 className={style.Glava}>Складские базы</h2>
          <h1 className={style.text}>Локация 1: г. Москва, Южное шоссе, 42, склад №5</h1>
          <button className={style.button}>Заказать звонок</button>
          <button className={style.button1}>Оставить заявку</button>
        </div>
      </div>
    </div>
  );
};

export default Map;
import React from 'react';
import Image from 'next/image';

import style from './Katalog.module.scss';

export const Katalog = () => {
  const cardCount = 1;

  const cards = Array.from({ length: cardCount }, (_, index) => (
    <div key={index} className={style.card}>
      <img  className={style.cardImage} />
        <div className={style.cardContainer}>
          <img src="/assets/1.png" alt="Перейти" className={style.buttonImage} />
          <img src="/assets/Katanka1.png" alt="Перейти" className={style.buttonImage} />
          <img src="/assets/2.png" alt="Перейти" className={style.buttonImage} />
          <img src="/assets/3.png" alt="Перейти" className={style.buttonImage} />
          <img src="/assets/4.png" alt="Перейти" className={style.buttonImage} />
          <img src="/assets/5.png" alt="Перейти" className={style.buttonImage} />
          <img src="/assets/6.png" alt="Перейти" className={style.buttonImage} />
          <img src="/assets/77.png" alt="Перейти" className={style.buttonImage} />
          <img src="/assets/8.png" alt="Перейти" className={style.buttonImage} />
          <img src="/assets/9.png" alt="Перейти" className={style.buttonImage} />
          <img src="/assets/10.png" alt="Перейти" className={style.buttonImage} />
          <img src="/assets/11.png" alt="Перейти" className={style.buttonImageH} />
        </div>
    </div>
  ));

return (
    <div>
      <div className={style.container}>
        <h3 className={style.title}>КАТАЛОГ ТОВАРОВ МЕТАЛЛОПРОКАТА</h3>
        <button className={style.custombutton}>
          <div className={style.iconWrapper}>
            <Image src="/icon/file.png" alt="Пример" width={20} height={20} />
          </div>
          Скачать прайс-лист
        </button>
      </div>
      <div>
        {cards}
      </div>
    </div>
  );
};

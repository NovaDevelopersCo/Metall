import React from 'react';
import Image from 'next/image';

import style from './Katalog.module.scss';

export const Katalog = () => {
  const cardCount = 1;

  const cards = Array.from({ length: cardCount }, (_, index) => (
    <div key={index} className={style.card}>
      <img  className={style.cardImage} />
        <div className={style.cardContainer}>
          <img src="/assets/armatura.png" alt="Перейти" className={style.buttonImage} />
          <img src="/assets/balka.png" alt="Перейти" className={style.buttonImage} />
          <img src="/assets/katanka.png" alt="Перейти" className={style.buttonImage} />
          <img src="/assets/krug.png" alt="Перейти" className={style.buttonImage} />
          <img src="/assets/list.png" alt="Перейти" className={style.buttonImage} />
          <img src="/assets/polosa.png" alt="Перейти" className={style.buttonImage} />
          <img src="/assets/proflist.png" alt="Перейти" className={style.buttonImage} />
          <img src="/assets/shveller.png" alt="Перейти" className={style.buttonImage} />
          <img src="/assets/square.png" alt="Перейти" className={style.buttonImage} />
          <img src="/assets/trub.png" alt="Перейти" className={style.buttonImage} />
          <img src="/assets/ugolok.png" alt="Перейти" className={style.buttonImage} />
          <img src="/assets/slugi.png" alt="Перейти" className={style.buttonImageH} />
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

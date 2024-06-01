import React from 'react';

import Card from './@Card/Card';
import { Katalog } from './@Katalog/Katalog';
import  TextMap  from './@TextMap/Text'
import Map from './@TextMap/@Map/Map'

import style from './Main.module.scss';

const Main = () => {
  return (
    <div>
      <div className={style.container}>
        <img className={style.ImgMetall} src="./assets/metallchell1.png" alt="Metallchell1" />
        <div className={style.contTxt}>
          <h3 className={style.Text}>Металлопрокат высочайшего качества</h3>
          <h2 className={style.H2Text}>Надежные поставки, оперативная доставка и гарантированное качество для вашего успешного проекта. Работаем оптом и в розницу.</h2>
          <button className={style.button}>Заказать звонок</button>
        </div>
      </div>
      <div className={style.Cont}>
        <div className={style.Card1}>
          <Card icon="/icon/image11.png" title="Быстрая доставка" text="Гарантируем оперативную доставку металлопроката" />
        </div>
        <div className={style.Card2}>
          <Card icon="/icon/image22.png" title="Профессиональная консультация" text="Мы помогаем в выборе оптимальных решений" />
        </div>
        <div className={style.Card3}>
          <Card icon="/icon/image33.png" title="Высокое качество" text="Соответствующего всем необходимым стандартам" />
        </div>
      </div>
      <Katalog />
      <TextMap/>
      <Map />
    </div>
  );
};

export default Main;
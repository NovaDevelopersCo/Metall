import React from 'react';

import styles from './Main.module.scss';

const Main = () => {
  return (
    <div className={styles.container}>
      <img className={styles.ImgMetall}src="./assets/metallchell1.png" alt="Metallchell1" />
      <div>
        <h3 className={styles.Text}>Металлопрокат высочайшего качества</h3>
      </div>
      <div>
        <h2 className={styles.H2Text}>Надежные поставки, оперативная доставка и гарантированное качество для вашего успешного проекта. Работаем оптом и в розницу.</h2>     
      </div>             
    </div>  
  );
};

export default Main;
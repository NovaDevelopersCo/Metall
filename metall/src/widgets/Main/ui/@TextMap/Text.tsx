import React from 'react'

import style from './Text.module.scss'

const Text = () => {
  return (
    <div>
        <div className={style.conteiner}>
            <h3 className={style.title}>О НАШЕЙ КОМПАНИИ</h3>
            <h2 className={style.text}>Компания "Производственная компания РС" успешно работает на рынке металлургических материалов с 2015 года. За это время мы расширили ассортимент наших товаров, предоставляя клиентам широкий выбор металлопроката высокого качества. Наш ассортимент включает практически все виды металлопроката, доступные как для оптовых, так и для розничных заказов.</h2>
            <h3 className={style.title2}>ПОЧЕМУ ВЫБИРАЮТ НАС?</h3>
        </div>
        <div className={style.contCard}>
        <div className={style.contCard}>
      <div>
        <img src="/icon/green.png" alt="Green" className={style.Card}/>
        <div className={style.CardContent}>
          <h3 className={style.CardTitle}>Широкий ассортимент металла</h3>
          <h1 className={style.CardText}>В нашем каталоге вы найдете более 10 000 позиций металлопроката</h1>
        </div>
      </div>
      <div>
        <img src="/icon/green.png" alt="Green" className={style.Card}/>
        <div className={style.CardContent}>
          <h3 className={style.CardTitle}>Гибкие условия заказов</h3>
          <h1 className={style.CardText}>Обеспечиваем клиентам гибкие условия как для оптовых, так и для розничных заказов</h1>
        </div>
      </div>
      <div>
        <img src="/icon/green.png" alt="Green" className={style.Card}/>
        <div className={style.CardContent}>
          <h3 className={style.CardTitle}>Современное оборудование </h3>
          <h1 className={style.CardText}>Передовые технологии и современное оборудование, что гарантирует высокую точность и качество</h1>
        </div>
      </div>
      <div>
        <img src="/icon/green.png" alt="Green" className={style.Card}/>
        <div className={style.CardContent}>
          <h3 className={style.CardTitle}>Быстрый сервис</h3>
          <h1 className={style.CardText}>Закажите звонок и мы отзвоним вам в течении 10 минут </h1>
        </div>
      </div>
    </div>

        </div>
    </div>
  )
}

export default Text
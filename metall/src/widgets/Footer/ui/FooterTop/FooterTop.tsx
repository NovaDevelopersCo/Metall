import React from 'react';
import styles from './FooterTop.module.scss';

const FooterTop = () => {
    return (
        <div className={styles.footer__box} >
            <ul className={styles.footer__pages}>
                <li>Главная страница</li>
                <li>Каталог товаров</li>
                <li>О нас</li>
                <li>Услуги</li>
                <li>Контакты</li>
            </ul>
            <h2>ПК PC</h2>
            <ul className={styles.footer__info}>
                <li>Правила пользования</li>
                <li>Политика конфиденциальности</li>
                <li>Возврат и обмен</li>
                <li>Прайс-лист</li>
                <li>Оставить заявку</li>
            </ul>
        </div >
    );
};

export default FooterTop;

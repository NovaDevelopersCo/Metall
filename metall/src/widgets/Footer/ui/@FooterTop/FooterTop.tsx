import React from 'react';
import styles from './FooterTop.module.scss';
import Link from 'next/link';

const FooterTop = () => {
    return (
        <div className={styles.FooterColumn} >
            <ul className={styles.FooterPages}>
                <li>
                    <a href='#'>Главная страница</a>
                </li>
                <li>
                    <Link href='/'>Каталог товаров</Link>
                </li>
                <li>
                    <Link href='/'>О нас</Link>
                </li>
                <li>
                    <Link href='/services'>Услуги</Link>
                </li>
                <li>
                    <Link href='/'>Контакты</Link>
                </li>
            </ul>
            <h2 className={styles.FooterTitle}>ПК PC</h2>
            <ul className={styles.FooterService}>
                <li>
                    <a href='#'>Правила пользования</a>
                </li>
                <li>
                    <a href='#'>Политика конфиденциальности</a>
                </li>
                <li>
                    <a href='#'>Возврат и обмен</a>
                </li>
                <li>
                    <a href='#'>Прайс-лист</a>
                </li>
                <li>
                    <a href='#'>Оставить заявку</a>
                </li>
            </ul>
        </div >
    );
};

export default FooterTop;

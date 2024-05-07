import React from 'react';
import styles from './FooterBottom.module.scss';
import Telegram from '@/shared/ui/socials/Telegram';
import WhatsApp from '@/shared/ui/socials/WhatsApp';
import VK from '@/shared/ui/socials/VK';
import Instagram from '@/shared/ui/socials/Instagram';

const FooterTop = () => {

    return (
        <div className={styles.footer__info}>
            <ul className={styles.footer__soc}>
                <li><Telegram /></li>
                <li><WhatsApp /></li>
                <li><VK /></li>
                <li><Instagram /></li>
            </ul>
            <div className={styles.footer__contacts}>
                <p>metal@gmail.com</p>
                <p>+7 (499) 938-95-77</p>
                <p>Website developed by Nova developers</p>
            </div>
        </div>
    );
};

export default FooterTop;

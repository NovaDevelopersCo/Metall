import React from 'react';
import styles from './FooterBottom.module.scss';
import Telegram from '@/shared/ui/socials/Telegram';
import WhatsApp from '@/shared/ui/socials/WhatsApp';
import VK from '@/shared/ui/socials/VK';
import Instagram from '@/shared/ui/socials/Instagram';

const FooterTop = () => {

    return (
        <div className={styles.FooterInfo}>
            <div className={styles.FooterSocials}>
                <hr className={styles.Line} />
                <ul className={styles.Icons}>
                    <li ><Telegram /></li>
                    <li><WhatsApp /></li>
                    <li><VK /></li>
                    <li><Instagram /></li>
                </ul>
                <hr className={styles.Line} />
            </div>
            <div className={styles.FooterData}>
                <div className={styles.FooterContacts}>
                    <p className={styles.FooterDetail}>metal@gmail.com</p>
                    <p className={styles.FooterDetail}>+7 (499) 938-95-77</p>
                </div>
                <div className={styles.FooterBy}>
                    <p className={styles.FooterDetail}>Website developed by Nova developers</p>
                </div>
            </div>
        </div>
    );
};

export default FooterTop;

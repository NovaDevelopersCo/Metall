import React from "react"
import FooterTop from './@FooterTop/FooterTop'
import FooterBottom from './@FooterBottom/FooterBottom'
import styles from './Footer.module.scss';
const Footer = () => {
    return (
        <footer>
            <div className={styles.FooterContainer}>
                <div className={styles.FooterContent}>
                    <FooterTop />
                </div>
                <FooterBottom />
            </div>
        </footer>
    )
}

export default Footer
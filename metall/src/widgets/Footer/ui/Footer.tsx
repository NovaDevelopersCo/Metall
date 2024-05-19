import FooterBottom from './@FooterBottom/FooterBottom'
import FooterTop from './@FooterTop/FooterTop'
import styles from './Footer.module.scss'
import React from 'react'

const Footer = () => {
	return (
		<footer>
			<div className={styles.FooterContainer}>
				<FooterTop />
				<FooterBottom />
			</div>
		</footer>
	)
}

export default Footer

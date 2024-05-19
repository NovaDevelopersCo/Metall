import styles from './FooterBottom.module.scss'
import Instagram from '@/shared/ui/socials/Instagram'
import Telegram from '@/shared/ui/socials/Telegram'
import VK from '@/shared/ui/socials/VK'
import WhatsApp from '@/shared/ui/socials/WhatsApp'
import React from 'react'

const FooterTop = () => {
	return (
		<div className={styles.FooterInfo}>
			<div className={styles.FooterSocials}>
				<hr className={styles.Line} />
				<ul className={styles.Icons}>
					<li>
						<a href='#'>
							<Telegram />
						</a>
					</li>
					<li>
						<a href='#'>
							<WhatsApp />
						</a>
					</li>
					<li>
						<a href='#'>
							<VK />
						</a>
					</li>
					<li>
						<a href='#'>
							<Instagram />
						</a>
					</li>
				</ul>
				<hr className={styles.Line} />
			</div>
			<div className={styles.FooterData}>
				<div className={styles.FooterContacts}>
					<p className={styles.FooterDetail}>metal@gmail.com</p>
					<p className={styles.FooterDetail}>+7 (499) 938-95-77</p>
				</div>
				<div className={styles.FooterBy}>
					<p className={styles.FooterDetail}>
						Website developed by Nova developers
					</p>
				</div>
			</div>
		</div>
	)
}

export default FooterTop

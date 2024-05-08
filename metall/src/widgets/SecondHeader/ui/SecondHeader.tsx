import styles from './SecondHeader.module.scss'
import React from 'react'

const SecondHeader = () => {
	return (
		<header className={styles.secondHeader}>
			<nav className={styles.secondHeaderNavigation}>
				<div className={styles.location}>
					<p>ПК РС </p>
				</div>
				<ul className={styles.menu}>
					<li>
						<a href='#'>Каталог товаров</a>
					</li>
					<li>
						<a href='#'>О нас</a>
					</li>
					<li>
						<a href='#'>Услуги</a>
					</li>
					<li>
						<a href='#'>Контакты</a>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default SecondHeader

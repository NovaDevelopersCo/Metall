import styles from './FooterTop.module.scss'
import React from 'react'

const FooterTop = () => {
	return (
		<div className={styles.FooterColumn}>
			<ul className={styles.FooterPages}>
				<li>
					<a href='#'>Главная страница</a>
				</li>
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
		</div>
	)
}

export default FooterTop

"use client"
import Gps from '@/shared/ui/icons/Gps'
import Clock from '@/shared/ui/icons/Clock'
import styles from './Header.module.scss'
import Burger from '@/shared/ui/icons/Burger'
import { useState } from 'react'
import CloseBtn from '@/shared/ui/icons/CloseBtn'

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [hideOrShow, seHideOrShow] = useState({});
	const handleMenu = () => {
		setIsOpen((prev) => !prev);
		if (isOpen) {
			seHideOrShow(() => {
				return {}
			})
		} else {
			seHideOrShow(() => {
				return { display: 'flex' }
			})
		}
	}
	return (
		<header className={styles.header}>
			<nav className={styles.headerNavigation}>
				<div className={styles.location}>
					<Gps />
					<select>
						<option value='option1'>Москва</option>
					</select>
				</div>
				<div className={styles.address}>
					<a href='https://maps.google.com/?g=55.745875,37.578137'>
						Адрес: Смоленская улица 39, Москва
					</a>
				</div>
				<div className={styles.clockBlock}>
					<Clock />
					<span>Пн. - Пт.: 9:00 - 18:00</span>
				</div>
				<a className={styles.contactInfo} href='tel:+7 (499) 938-95-77'>+7 (499) 938-95-77</a>
				<a className={styles.contactInfo} href='mailto:metal@gmail.com'>metal@gmail.com</a>
				<div className={styles.burgerMenu}>
					{isOpen ? <button onClick={handleMenu}><Burger /></button> : <button onClick={handleMenu}><CloseBtn /></button>}
				</div>
			</nav>
		</header>
	)
}

export default Header

import styles from './Header.module.scss'
import { Clock3, MapPin } from 'lucide-react' 

const Header = () => {
	return (
		<header className={styles.header}>
			<nav className={styles.headerNavigation}>
				<div className={styles.location}>
					<MapPin />
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
					<Clock3 />
					<span>Пн. - Пт.: 9:00 - 18:00</span>
				</div>
				<a href='tel:+7 (499) 938-95-77'>+7 (499) 938-95-77</a>
				<a href='mailto:metal@gmail.com'>metal@gmail.com</a>
			</nav>
		</header>
	)
}

export default Header

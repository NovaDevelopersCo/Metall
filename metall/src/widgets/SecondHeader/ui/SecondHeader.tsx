import styles from './SecondHeader.module.scss'
import { Search } from 'lucide-react'

const SecondHeader = () => {
	return (
		<header className={styles.secondHeader}>
			<nav className={styles.secondHeaderNavigation}>
				<ul className={styles.menu}>
					<h1 className={styles.logo}>ПК РС</h1>
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

					<div className={styles.search}>
						<input placeholder='Поиск в каталоге...' type='text' />
						<Search />
					</div>
					<img src='./icons/telegram.png' alt='telegram' />
				</ul>
			</nav>
		</header>
	)
}

export default SecondHeader

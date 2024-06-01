import styles from './SecondHeader.module.scss'
import Basket from '@/shared/ui/icons/Basket'
import Search from '@/shared/ui/icons/Search'
import Link from 'next/link'

const SecondHeader = () => {
	return (
		<header className={styles.secondHeader}>
			<nav className={styles.secondHeaderNavigation}>
				<ul className={styles.menu}>
					<h1 className={styles.logo}>ПК РС</h1>
					<li>
						<Link href='/'>Каталог товаров</Link>
					</li>
					<li>
						<Link href='/'>О нас</Link>
					</li>
					<li>
						<Link href='/services'>Услуги</Link>
					</li>
					<li>
						<Link href='/'>Контакты</Link>
					</li>
					<div className={styles.icons}>
						<a href='#'>
							<img
								className={styles.telegram}
								src='/telegram.png'
								alt='telegram'
							/>
						</a>
						<a href='#'>
							<img src='/whatup.png' alt='whatup' />
						</a>
					</div>
					<div className={styles.search}>
						<input placeholder='Поиск в каталоге...' type='text' />
						<Search />
					</div>
					<button className={styles.basket}>
						<Basket />
					</button>
				</ul>
			</nav>
		</header>
	)
}

export default SecondHeader

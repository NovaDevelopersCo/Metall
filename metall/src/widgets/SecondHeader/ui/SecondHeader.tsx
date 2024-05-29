'use client'
import React, { useState } from 'react';
import { PagesMenu } from '@/features/PagesMenu';
import styles from './SecondHeader.module.scss'
import Basket from '@/shared/ui/icons/Basket'
import Search from '@/shared/ui/icons/Search'
import PagesBtn from '@/shared/ui/icons/PagesBtn';

const SecondHeader = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [hideOrShow, setHideOrShow] = useState({});

	const handleMenu = () => {
		setIsOpen(prev => !prev);
		setHideOrShow(prev => (isOpen ? {} : { display: 'flex' }));
	};

	return (
		<>
			<div className={styles.secondHeader}>
				<nav className={styles.secondHeaderNavigation}>
					<div className={styles.menu}>
						<h1 className={styles.logo}>ПК РС</h1>
						<ul className={styles.pages}>
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
						<div className={styles.pagesMenu}>
							<button onClick={handleMenu}>
								<PagesBtn />
							</button>
						</div>
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
						<div className={styles.search}>
							<input placeholder='Поиск в каталоге...' type='text' />
							<Search />
						</div>
						<button className={styles.basket}>
							<Basket />
						</button>
					</div>
				</nav>
			</div>
			<PagesMenu setHideOrShow={hideOrShow} isOpen={isOpen} handleMenu={handleMenu} />
		</>
	)
}

export default SecondHeader

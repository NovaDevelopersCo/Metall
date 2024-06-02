'use client'
import React, { useState, useEffect } from 'react';
import { PagesMenu } from '@/features/PagesMenu';
import styles from './SecondHeader.module.scss'
import Basket from '@/shared/ui/icons/Basket'
import { Search } from '@/features/Search'
import SearchBtn from '@/shared/ui/icons/SearchBtn'
import PagesBtn from '@/shared/ui/icons/PagesBtn';
import Link from 'next/link'

const SecondHeader = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [hideOrShow, setHideOrShow] = useState({});
	const [isModal, setIsModal] = useState(false);
	const [blockOrNone, setBlockOrNone] = useState({});
	const [screenWidth, setScreenWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = () => setScreenWidth(window.innerWidth);
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const handleMenu = () => {
		setIsOpen(prev => !prev);
		setHideOrShow(prev => (isOpen ? {} : { display: 'flex' }));
	};

	const handleSearchMenu = () => {
		if (screenWidth <= 750) {
			setIsModal(prev => !prev);
			setBlockOrNone(prev => (isModal ? {} : { display: 'block' }));
		}
	};

	return (
		<>
			<div className={styles.secondHeader}>
				<div className={styles.secondHeaderNavigation}>
					<div className={styles.menu}>
						<h1 className={styles.logo}>ПК РС</h1>
						<ul className={styles.pages}>
							<li>
								<Link href='/'>Каталог товаров</Link>
							</li>
							<li>
								<a href='/'>О нас</a>
							</li>
							<li>
								<a href='/services'>Услуги</a>
							</li>
							<li>
								<a href='/contact'>Контакты</a>
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
							<button onClick={screenWidth <= 750 ? handleSearchMenu : null}>
								<SearchBtn />
							</button>
						</div>
						<button className={styles.basket}>
							<Basket />
						</button>
					</div>
				</div>
			</div>
			<PagesMenu setHideOrShow={hideOrShow} isOpen={isOpen} handleMenu={handleMenu} />
			{screenWidth <= 750 && (
				<Search setBlockOrNone={blockOrNone} isModal={isModal} onClose={handleSearchMenu} />
			)}
		</>
	)
}

export default SecondHeader;
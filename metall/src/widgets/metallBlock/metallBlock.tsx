'use client'

import Footer from './metaFooter'
import styles from './metallBlock.module.scss'
import Doc from '@/../public/image/fluent--document-bullet-list-cube-20-regular.svg'
import Button from '@/shared/ui/Button/metaButton'
import React from 'react'

interface MetallBlockProps {
	metallInfo: {
		title: string
		imageUrl: string
	}[]
}

const MetallBlock: React.FC<MetallBlockProps> = ({ metallInfo }) => {
	const onClickAdd = (item: { title: string; imageUrl: string }) => {
		console.log('Добавлено в корзину:', item)
	}

	return (
		<div>
			<div className={styles.catalogHeader}>
				<h1 className={styles.catalogTitle}>
					КАТАЛОГ ТОВАРОВ МЕТАЛЛОПРОКАТА
				</h1>
				<button
					className={styles['list-button']}
					onClick={() => console.log('Скачать прайс-лист')}
				>
					<img
						src={Doc.src}
						alt='иконка'
						className={styles['button-icon']}
					/>
					<span>Скачать прайс-лист</span>
				</button>
			</div>
			<div className={styles['card-container']}>
				{metallInfo.map((metall, index) => (
					<div key={index} className={styles.card}>
						<img
							className={styles['card-image']}
							src={metall.imageUrl}
							alt='photo'
						/>
						<div className={styles['card-overlay']}></div>
						<div className={styles['card-content']}>
							<h4 className={styles['card-title']}>
								{metall.title}
							</h4>
							<Button />
						</div>
					</div>
				))}
			</div>
			<Footer />
		</div>
	)
}

export default MetallBlock

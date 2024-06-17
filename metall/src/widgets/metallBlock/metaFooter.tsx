import styles from './metaFooter.module.scss'
import React from 'react'

const Footer: React.FC = () => {
	return (
		<div className={styles.footerContainer}>
			<div className={styles.leftContainer}>
				<p className={styles.leftText}>
					Наша компания обладает собственным автопарком, что
					обеспечивает быструю и экономичную доставку продукции. С
					доступными тарифами и оперативным выполнением заказов, все
					больше клиентов выбирают опцию доставки при размещении
					заказа
				</p>
				<button className={styles.orderCallButton}>
					Заказать звонок
				</button>
			</div>
			<div className={styles.rightContainer}>
				<p className={styles.rightText}>
					<span className={styles.highlightText}>
						Мы гордимся шансом
					</span>{' '}
					предоставлять надежные и качественные материалы для
					разнообразных производственных потребностей
				</p>
			</div>
		</div>
	)
}

export default Footer

import style from './RightSideProducts.module.scss'
import React from 'react'

const tableRowsData = [
	{
		name: 'Лист № 3 ТУ рифленый',
		price: '2500',
		size: '52000',
		Mark: 'СТ3',
		quantity: 'Количество'
	},
	{
		name: 'Лист № 3 Ф рифленый',
		price: '2500',
		size: '55000',
		Mark: 'СТ3',
		quantity: 'Количество'
	},
	{
		name: 'Лист № 4 рифленый',
		price: '2000',
		size: '55000',
		Mark: 'СТ3',
		quantity: 'Количество'
	},
	{
		name: 'Лист № 5 ТУ рифленый',
		price: '2500',
		size: '56000',
		Mark: 'А400',
		quantity: 'Количество'
	}
]

const RightSideProducts: React.FC = () => {
	return (
		<div className={style.RightSide}>
			<table className={style.ListOfProducts}>
				<thead>
					<tr className={style.LineOfTitles}>
						<th className={style.TitleOfList}>Листы рифленые</th>
						<th className={style.TitleOfList}>Цена</th>
						<th className={style.TitleOfList}>Размер</th>
						<th className={style.TitleOfList}>Марка стали</th>
						<th className={style.TitleOfList}>Количество</th>
						<th className={style.ButtonOrder}>
							<button>Заказать</button>
						</th>
					</tr>
				</thead>
				<tbody>
					{tableRowsData.map((row, index) => (
						<tr key={index} className={style.LineOfTitles}>
							<td className={style.TitleOfList}>{row.name}</td>
							<td className={style.TitleOfList}>{row.price}</td>
							<td className={style.TitleOfList}>{row.size}</td>
							<td className={style.TitleOfList}>{row.Mark}</td>
							<td className={style.TitleOfList}>
								{row.quantity}
							</td>
							<td className={style.ButtonOrder}>
								<button>Заказать</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default RightSideProducts

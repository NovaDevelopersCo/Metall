import style from './../Main.module.scss'
import Image from 'next/image'
import React from 'react'

interface CardProps {
	icon: string
	title: string
	text: string
}

const Card: React.FC<CardProps> = ({ icon, title, text }) => {
	return (
		<div className={style.cardContainer}>
			<div className={style.card}>
				<Image
					className={style.cardicon}
					src={icon}
					width={18}
					height={18}
					alt='icon'
				/>
				<h3>{title}</h3>
				<p>{text}</p>
			</div>
		</div>
	)
}

export default Card

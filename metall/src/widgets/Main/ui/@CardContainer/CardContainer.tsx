import Card from '../@Card/Card'
import image11 from '@/public/icon/image11.png'
import image22 from '@/public/icon/image22.png'
import image33 from '@/public/icon/image33.png'
import React from 'react'

const CardContainer = () => {
	return (
		<div>
			<Card icon={image11.src} title='Заголовок 1' text='Текст 1' />
			<Card icon={image22.src} title='Заголовок 2' text='Текст 2' />
			<Card icon={image33.src} title='Заголовок 3' text='Текст 3' />
		</div>
	)
}

export default CardContainer

'use client'

import style from './Map.module.scss'
import { CallModal, SubmitApplication } from '@/entities'
import React, { useState } from 'react'

const Map = () => {
	const [isCallModalOpen, setIsCallModalOpen] = useState(false)
	const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false)

	const showCallModal = () => setIsCallModalOpen(true)
	const hideCallModal = () => setIsCallModalOpen(false)

	const showSubmitModal = () => setIsSubmitModalOpen(true)
	const hideSubmitModal = () => setIsSubmitModalOpen(false)

	return (
		<div className={style.container}>
			<div className={style.left}>
				<h3 className={style.title}>Наш адрес</h3>
				<div className={style.map}>
					<iframe
						className={style.Map}
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d280.86514869543015!2d37.759870491611046!3d55.72512176998222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414ab56ef24d8e51%3A0x27fb75fff1cc7ffb!2z0JHQpiDCq9Cl0LDQvNC10LvQtdC-0L3Cuw!5e0!3m2!1sru!2sua!4v1716117764017!5m2!1sru!2sua'
						width='100%'
						height='400'
						frameBorder='0'
						aria-hidden='false'
					></iframe>
				</div>
			</div>
			<div className={style.right}>
				<div className={style.contactinfo}>
					<h3 className={style.contacttitle}>
						Контактная информация
					</h3>
					<h2 className={style.Glava}>Отдел продаж</h2>
					<h1 className={style.text}>
						Адрес офиса: г. Москва, ул. Ленина, 25, офис 305
					</h1>
					<h2 className={style.Glava}>Складские базы</h2>
					<h1 className={style.text}>
						Локация 1: г. Москва, Южное шоссе, 42, склад №5
					</h1>
					<div className={style.buttons}>
						<button
							className={style.buttonCall}
							onClick={showCallModal}
						>
							Заказать звонок
						</button>
						<button
							className={style.buttonSubmit}
							onClick={showSubmitModal}
						>
							Оставить заявку
						</button>
					</div>
				</div>
			</div>
			<CallModal
				isModalOpen={isCallModalOpen}
				handleCancel={hideCallModal}
			/>
			<SubmitApplication
				isModalOpen={isSubmitModalOpen}
				handleCancel={hideSubmitModal}
			/>
		</div>
	)
}

export default Map

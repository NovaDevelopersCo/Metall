'use client'

import style from './SubmitApplication.module.scss'
import { Button, Input, Modal, Select } from 'antd'
import React, { useState } from 'react'

const { Option } = Select
const { TextArea } = Input

const SubmitApplication: React.FC = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [email, setEmail] = useState('')
	const [phone, setPhone] = useState('')
	const [comment, setComment] = useState('')
	const [countryCode, setCountryCode] = useState('+1')
	const [isSubmitted, setIsSubmitted] = useState(false)

	const showModal = () => {
		setIsModalOpen(true)
		setIsSubmitted(false)
	}

	const handleOk = () => {
		setIsModalOpen(false)
	}

	const handleCancel = () => {
		setIsModalOpen(false)
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		if (email.trim() !== '' && phone.trim() !== '') {
			setIsSubmitted(true)
		} else {
			alert('Пожалуйста, заполните все поля.')
		}
	}

	return (
		<>
			<Button type='primary' onClick={showModal}>
				Submit Application
			</Button>
			<Modal
				title={
					<div
						style={{
							display: 'flex',
							justifyContent: 'center',
							fontSize: '32px',
							fontWeight: '800',
							lineHeight: '37.5px'
						}}
					>
						{isSubmitted ? 'Заявка принята' : 'Оставить заявку'}
					</div>
				}
				open={isModalOpen}
				onOk={handleOk}
				onCancel={handleCancel}
				footer={null}
				centered
			>
				{isSubmitted ? (
					<div
						style={{
							textAlign: 'center',
							marginTop: '40px',
							fontSize: '16px'
						}}
					>
						<div>
							Спасибо за Вашу заявку.
							<br /> В ближайшее время наш специалист свяжется с
							вами.
						</div>
						<Button
							type='primary'
							onClick={handleCancel}
							style={{
								marginTop: '20px',
								fontWeight: 'bold',
								backgroundColor: '#FFC824',
								color: 'black',
								borderRadius: 10,
								paddingTop: 20,
								paddingBottom: 20,
								paddingLeft: 50,
								paddingRight: 50
							}}
						>
							Закрыть
						</Button>
					</div>
				) : (
					<div style={{ display: 'flex', justifyContent: 'center' }}>
						<form
							onSubmit={handleSubmit}
							style={{ textAlign: 'center', maxWidth: '350px' }}
						>
							<Input
								addonBefore={
									<Select
										value={countryCode}
										onChange={setCountryCode}
										style={{
											width: '75px',
											borderColor: '#F2F2F2'
										}}
									>
										<Option value='+1'>+1</Option>
										<Option value='+7'>+7</Option>
										<Option value='+380'>+380</Option>
									</Select>
								}
								placeholder='555 555-1234'
								value={phone}
								onChange={e => setPhone(e.target.value)}
								className={style.Input}
							/>
							<br />
							<Input
								placeholder='Ваш e-mail'
								value={email}
								onChange={e => setEmail(e.target.value)}
								className={style.Input}
							/>
							<br />
							<TextArea
								placeholder='Ваш Ваш комментарий'
								value={comment}
								onChange={e => setComment(e.target.value)}
								className={style.Input}
							/>
							<br />
							<button
								style={{
									fontWeight: 'bold',
									backgroundColor: '#FFC824',
									marginTop: 30,
									borderRadius: 10,
									paddingTop: 15,
									paddingBottom: 15,
									paddingLeft: 50,
									paddingRight: 50
								}}
							>
								Отправить
							</button>
							<p
								style={{
									fontWeight: 'bold',
									fontSize: '16px',
									marginTop: 40
								}}
							>
								Отправляя форму, вы даете согласие на <br />{' '}
								обработку персональных данных.
							</p>
						</form>
					</div>
				)}
			</Modal>
		</>
	)
}

export default SubmitApplication

'use client'

import style from './SubmitApplication.module.scss'
import { Input, Modal, Select } from 'antd'
import React, { useState } from 'react'

const { Option } = Select
const { TextArea } = Input

interface SubmitApplicationProps {
	isModalOpen: boolean
	handleCancel: () => void
}

const SubmitApplication: React.FC<SubmitApplicationProps> = ({
	isModalOpen,
	handleCancel
}) => {
	const [email, setEmail] = useState('')
	const [phone, setPhone] = useState('')
	const [comment, setComment] = useState('')
	const [countryCode, setCountryCode] = useState('+1')
	const [isSubmitted, setIsSubmitted] = useState(false)

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		if (email.trim() !== '' && phone.trim() !== '') {
			setIsSubmitted(true)
		} else {
			alert('Пожалуйста, заполните все поля.')
		}
	}

	return (
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
						<br /> В ближайшее время наш специалист свяжется с вами.
					</div>
					<button
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
					</button>
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
							placeholder='Ваш комментарий'
							value={comment}
							onChange={e => setComment(e.target.value)}
							className={style.Input}
						/>
						<br />
						<button
							type='submit'
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
	)
}

export default SubmitApplication

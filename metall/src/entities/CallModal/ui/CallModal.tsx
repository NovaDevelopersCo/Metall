'use client'

import { Button, Modal, Input, Select } from 'antd'
import React, { useState } from 'react'
import style from './CallModal.module.scss'

const { Option } = Select

const CallModal: React.FC = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [name, setName] = useState('')
	const [phone, setPhone] = useState('')
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
		if (name.trim() !== '' && phone.trim() !== '') {
			setIsSubmitted(true)
		} else {
			alert('Пожалуйста, заполните все поля.')
		}
	}

	return (
		<>
			<Button type='primary' onClick={showModal}>
				Open Modal
			</Button>
			<Modal
				title={isSubmitted ? 'Вы заказали звонок' : 'Заказать звонок'}
				open={isModalOpen}
				onOk={handleOk}
				onCancel={handleCancel}
				footer={null}
				centered
			>
				{isSubmitted ? (
					<div style={{ textAlign: 'center' }}>
						<div>Спасибо за Вашу заявку.<br/> В ближайшее время наш специалист свяжется с вами.</div>
						<Button type='primary' onClick={handleCancel} style={{ marginTop: '20px' }}>
							Закрыть
						</Button>
					</div>
				) : (
					<form onSubmit={handleSubmit} style={{ textAlign: 'center' }}>
						<Input
							placeholder='Ваше имя'
							value={name}
							onChange={e => setName(e.target.value)}
							className={style.Input}
						/>
						<br />
						<Input
							addonBefore={
								<Select
									value={countryCode}
									onChange={setCountryCode}
									style={{ width: '75px', borderColor: '#F2F2F2' }}
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
						<button style={{ fontWeight: 'bold', backgroundColor: '#FFC824', marginTop: 30 , borderRadius: 10, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10 }}>
                            Отправить
                        </button>
						<p style={{ fontWeight: 'bold', marginTop: 40 }}>
							Отправляя форму, вы даете согласие на <br/> обработку персональных данных.
						</p>
					</form>
				)}
			</Modal>
		</>
	)
}

export default CallModal
'use client'

import { Button, Modal, Input, Select } from 'antd'
import React, { useState } from 'react'

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
            {isSubmitted ? (
                <Modal
                title='Звонок успешно заказан'
                open={isModalOpen}
				onOk={handleOk}
				onCancel={handleCancel}
				footer={_ => <></>}
                >
                    <button>Закрыть</button>
                </Modal>
            ) : (
                <Modal
				title='Заказать звонок'
				open={isModalOpen}
				onOk={handleOk}
				onCancel={handleCancel}
				footer={_ => <></>}
			    >
			        <form onSubmit={handleSubmit}>
			            <Input
			            	placeholder='Ваше имя'
			            	value={name}
			            	onChange={e => setName(e.target.value)}
                            style={{ width: 350 }}
			            />
			            <br />
			            <Input
                            addonBefore={
                              <Select
                                value={countryCode}
                                onChange={setCountryCode}
                                style={{ width: 75 }}
                              >
                                <Option value="+1">+1</Option>
                                <Option value="+7">+7</Option>
                                <Option value="+380">+380</Option>
                              </Select>
                            }
                            placeholder="555 555-1234"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            style={{ width: 350 }}
                        />
			            <br />
			            <button type='submit'>Отправить</button>
			        </form>
			    </Modal>
            )}
		</>
	)
}

export default CallModal

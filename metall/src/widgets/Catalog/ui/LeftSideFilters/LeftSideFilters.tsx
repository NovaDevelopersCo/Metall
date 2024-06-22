'use client'

import { inputLength, inputThickness, inputWidth } from './FiltersForProducts'
import style from './LeftSideFilters.module.scss'
import React, { ChangeEvent, useState } from 'react'

const LeftSideFilters: React.FC = () => {
	const [selectedInput, setSelectedInput] = useState<string>('')

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSelectedInput(e.target.value)
	}

	return (
		<>
			<div className={style.LeftSide}>
				<div className={style.Length}>
					<h3 className={style.Title}>Длина</h3>
					<div className={style.InputBox}>
						{inputLength.map(field => (
							<div key={field.name} className={style.Input}>
								<input
									type='radio'
									id={field.name}
									name='productLength'
									value={field.label}
									checked={selectedInput === field.label}
									onChange={handleInputChange}
								/>
								<label htmlFor={field.name}>
									{field.label}
								</label>
							</div>
						))}
					</div>
				</div>
				<div className={style.Width}>
					<h3 className={style.Title}>Ширина</h3>
					<div className={style.InputBox}>
						{inputWidth.map(field => (
							<div key={field.name} className={style.Input}>
								<input
									type='radio'
									id={field.name}
									name='productWidth'
									value={field.label}
									checked={selectedInput === field.label}
									onChange={handleInputChange}
								/>
								<label htmlFor={field.name}>
									{field.label}
								</label>
							</div>
						))}
					</div>
				</div>
				<div className={style.Thickness}>
					<h3 className={style.Title}>Толщина</h3>
					<div className={style.InputBox}>
						{inputThickness.map(field => (
							<div key={field.name} className={style.Input}>
								<input
									type='radio'
									id={field.name}
									name='productThickness'
									value={field.label}
									checked={selectedInput === field.label}
									onChange={handleInputChange}
								/>
								<label htmlFor={field.name}>
									{field.label}
								</label>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	)
}
export default LeftSideFilters

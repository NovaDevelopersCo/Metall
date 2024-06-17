'use client'

type RadioInputProps = {
	checked: boolean
	onChange: () => void
	label: string
}

const RadioInput: React.FC<RadioInputProps> = ({
	checked,
	onChange,
	label
}) => {
	return (
		<label className='flex inline-flex items-center'>
			<input
				type='radio'
				style={{
					position: 'relative',
					appearance: 'none',
					// opacity: '0',
					width: '1rem',
					height: '1rem',
					borderRadius: '50%',
					marginRight: '0.5rem',
					/**/
					borderColor: checked ? '#FFC824' : '#000000',
					backgroundColor: checked ? '#FFC824' : 'transparent',
					padding: checked ? '2px' : '0'
				}}
				className={`form-radio h-5 w-5 border-yellow-500`}
				checked={checked}
				onChange={onChange}
			/>
			<span className='ml-2 w-407'>{label}</span>
			{/* <span className="ml-2">{spanText}</span> */}
		</label>
	)
}

export default RadioInput

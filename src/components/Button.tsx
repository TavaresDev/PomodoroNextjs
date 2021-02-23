import React, { useState } from "react"

interface ButtonProps {
	color?: string
	children?: string
}

const Button = (props: ButtonProps) => {
	const [state, setstate] = useState(0)

	const increment = () => {
		setstate(state + 1)
	}
	return (
		<div>
			<button
				type='button'
				style={{ backgroundColor: props.color }}
				onClick={increment}>
		
				{props.color}
				{props.children}
				<strong> {state} </strong>
			</button>
		</div>
	)
}

export default Button

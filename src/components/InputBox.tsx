import React, { useState, useContext } from "react"
import Radio from "@material-ui/core/Radio"
import RadioGroup from "@material-ui/core/RadioGroup"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import FormControl from "@material-ui/core/FormControl"
import FormLabel from "@material-ui/core/FormLabel"
import TextField from "@material-ui/core/TextField"
import { CountdownContext } from "../contexts/CountdownContext"
import { Box, Grid } from "@material-ui/core"

const InputBox = () => {
	// const { time, setTime, isActive} = useContext(CountdownContext)
	const { sessionTime, setSessionTime, isActive } = useContext(CountdownContext)
	// const [sessionTime, setSessionTime] = useState('25 * 60')

    const testValue  = '10'

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.log(e.target.value)
		setSessionTime(Number((e.target as HTMLInputElement).value) * 60)
		if (isActive === false) {
		}
	}
	return (
		<div>
			{/* <strong> Finish a cicle to recive a challenge</strong> */}
			<Box m={3}>
				<FormControl component='fieldset'>
					{/* <FormLabel component='legend'>Cicle Time</FormLabel> */}
					{/* <TextField onChange={handleChange}  id="standard-basic" label="Standard" /> */}
					<RadioGroup
						row
						aria-label='sessionTime'
						name='gender1'
						// defaultValue='25'
						// value={sessionTime}
						onChange={handleChange}>
						<FormControlLabel
							value='25'
							control={<Radio color='primary' />}
							label='25 min'
						/>
						<FormControlLabel
							value='50'
							control={<Radio color='primary' />}
							label='50 min'
						/>
						<FormControlLabel
							value='0.1'
							control={<Radio color='primary' />}
							label='6 sec '
						/>
					</RadioGroup>
				</FormControl>
			</Box>
	
            
		</div>
	)
}

export default InputBox

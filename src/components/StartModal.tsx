import { Button, TextField } from "@material-ui/core"
import React, { useContext, useState } from "react"
import { ChallengesContext } from "../contexts/ChallengesContext"
import styles from "../styles/components/StartModal.module.css"

const StartModal = () => {
	const { name, closeStartModal, setName } = useContext(ChallengesContext)

	const handleSubmit = (e) => {
		e.preventDefault()
		closeStartModal()
	}

	const handleChange = (e) => {
		console.log(e.target.value)
		setName(e.target.value)
	}

	return (
		<div className={styles.overlay}>
			<div className={styles.container}>
				<button className={styles.closeButton} type='button' onClick={closeStartModal}>
					<img src='/icons/close.svg' alt='Fechar Modal' />
				</button>

				<header>Pomo</header>

				<strong>Your Ant-Procrastination app</strong>
				{/* <p></p> */}
				{/* <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas, consequatur quae necessitatibus quaerat earum sequi et aperiam.</p> */}
				<p>This app is based on the Pomodoro technique, 
                    establishing a fixed time to work on a task. Then relax, before the next cycle.
                </p>
				<p> We provide challenges and levels to keep you on track</p>
				{/* <p>Start giving your name</p> */}

				{/* <p>{name}</p> */}

				<form onSubmit={handleSubmit}>
			
					<TextField id="standard-basic" label="Name"  onChange={handleChange}/>
					{/* <Button  variant="contained" color="primary"> save </Button> */}

					<input
						className={styles.startButton}
						type='submit'
						value='Start'
					/>

				</form>
			</div>
		</div>
	)
}

export default StartModal

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
				<button type='button' onClick={closeStartModal}>
					<img src='/icons/close.svg' alt='Fechar Modal' />
				</button>

				<header>Pomo</header>

				<strong></strong>
				<p>Your Ant-Procrastination app</p>
				<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas, consequatur quae necessitatibus quaerat earum sequi et aperiam.</p>


				{/* <p>{name}</p> */}

				<form onSubmit={handleSubmit}>
					<label>
						Name:
						<input type='text' onChange={handleChange} name='name' />
					</label>

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

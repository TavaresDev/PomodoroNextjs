import React, { useContext, useEffect, useState } from "react"
import { ChallengesContext } from "../contexts/ChallengesContext"
import styles from "../styles/components/Countdown.module.css"

let countdownTimeout: NodeJS.Timeout

const Countdown = () => {
	const [sessionTime, setSessionTime] = useState(0.1 * 60)

	const {startNewChallenge} = useContext(ChallengesContext)

	const [time, setTime] = useState(sessionTime)
	const [isActive, setIsActive] = useState(false)
	const [hasFinished, setHasFinished] = useState(false)

	const minutes = Math.floor(time / 60)
	const seconds = time % 60

	const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("")
	const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("")

	useEffect(() => {
		if (isActive && time > 0) {
			countdownTimeout = setTimeout(() => {
				setTime(time - 1)
			}, 1000)
		} else if (isActive && time == 0) {
			setHasFinished(true)
			setIsActive(false)
			startNewChallenge()
		}
	}, [isActive, time])

	const startContdown = () => {
		console.log(isActive)
		setIsActive(true)
	}
	const resetContdown = () => {
		clearTimeout(countdownTimeout)
		console.log(isActive)
		setIsActive(false)
		setTime(sessionTime)
	}

	return (
		<div>
			<div className={styles.countdownContainer}>
				<div>
					<span>{minuteLeft}</span>
					<span>{minuteRight}</span>
				</div>
				<span>:</span>
				<div>
					<span>{secondLeft}</span>
					<span>{secondRight}</span>
				</div>
			</div>

			{hasFinished ? (
				<button disabled className={`${styles.countdownButton}`}>
					Ciclo encerrado
				</button>
			) : (
				<>
					{isActive ? (
						<button
							type='button'
							className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
							onClick={resetContdown}>
							CANCELAR
						</button>
					) : (
						<button
							type='button'
							className={styles.countdownButton}
							onClick={startContdown}>
							START
						</button>
					)}
				</>
			)}
		</div>
	)
}

export default Countdown

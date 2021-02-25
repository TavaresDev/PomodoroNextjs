import React, { useContext } from "react"
import { ChallengesContext } from "../contexts/ChallengesContext"
import styles from "../styles/components/ChallengeBox.module.css"

const ChallengeBox = () => {
	const { activeChallenge, resetChallenge } = useContext(ChallengesContext)

	return (
		<div className={styles.ChallengeBoxContainer}>
			{activeChallenge ? (
				<div className={styles.ChallengeActive}>
					<header>{activeChallenge.amount} xp</header>
					<main>
						<img src={`icons/${activeChallenge.type}.svg`} alt='level up' />
						<strong> New Challege</strong>
						<p>{activeChallenge.description}</p>
					</main>

					<footer>
						<button
							className={styles.challengeFailedButton}
							onClick={resetChallenge}>
							Faill
						</button>
						<button className={styles.challengeSuccessButton}>
							Completed{" "}
						</button>
					</footer>
				</div>
			) : (
				<div className={styles.ChallengeNotActive}>
					<strong> Finish a cicle to recive a challenge</strong>
					<p>
						<img src='icons/level-up.svg' alt='level up' />
						Up levels by completing Challenges
					</p>
				</div>
			)}
		</div>
	)
}

export default ChallengeBox

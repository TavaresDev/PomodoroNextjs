import React from "react"
import styles from "../styles/components/ChallengeBox.module.css"

const ChallengeBox = () => {
	const hasActiveChallenge = true
	return (
		<div className={styles.ChallengeBoxContainer}>
			{hasActiveChallenge ? (
				<div className={styles.ChallengeActive}>
                    <header>400 xp</header>
                    <main>

                    <img src='icons/body.svg' alt='level up' />
                        <strong> New Challege</strong>
                        <p>Go for a walk</p>
                    </main>

                    <footer>
                        <button className={styles.challengeFailedButton} >Faill</button>
                        <button className={styles.challengeSuccessButton}>Completed </button>
                    </footer>
                     </div>
			) : (
				<div className={styles.ChallengeNotActive}>
					<strong> Finish an cicle to recive a challenge</strong>
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

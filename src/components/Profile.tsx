import React, { useContext } from "react"
import { ChallengesContext } from "../contexts/ChallengesContext"
import styles from "../styles/components/Profile.module.css"

const Profile = () => {

	const {level} = useContext(ChallengesContext)
	return (
		<div className={styles.profileContainer}>
			<img src='https://github.com/tavaresdev.png' alt='user' />
			<div>
				<strong> Andre Tavares</strong>
				<p>
					<img src='icons/level.svg' alt='level' />
					level {level}
				</p>
			</div>
		</div>
	)
}

export default Profile

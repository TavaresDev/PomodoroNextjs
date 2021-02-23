import React from "react"

import styles from "../styles/components/Profile.module.css"

const Profile = () => {
	return (
		<div className={styles.profileContainer}>
			<img src='https://github.com/tavaresdev.png' alt='user' />
			<div>
				<strong> Andre Tavares</strong>
				<p>
					<img src='icons/level.svg' alt='lvl' />
					Lvl 1
				</p>
			</div>
		</div>
	)
}

export default Profile

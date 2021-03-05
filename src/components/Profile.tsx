import React, { useContext, useEffect, useState } from "react"
import { ChallengesContext } from "../contexts/ChallengesContext"
import styles from "../styles/components/Profile.module.css"
import StartModal from "./StartModal"

const Profile = () => {
	const [isStartModalOpen, setIsStartModalOpen] = useState(false)


	const {level, name} = useContext(ChallengesContext)
	return (
		<div className={styles.profileContainer}>
			{/* <img src='https://github.com/tavaresdev.png' alt='user' /> */}
			<div>
				<strong>Nome : {name}</strong>
				<p>
					<img src='icons/level.svg' alt='level' />
					level : {level}
				</p>
			</div>
			{isStartModalOpen && <StartModal />}
		</div>
	)
}

export default Profile

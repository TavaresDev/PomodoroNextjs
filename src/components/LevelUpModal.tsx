import React, { useContext } from "react"
import { ChallengesContext } from "../contexts/ChallengesContext"
import styles from "../styles/components/LevelUpModal.module.css"

const LevelUpModal = () => {

    const {level, closeLevelUpModal} = useContext(ChallengesContext)
	return (
		<div className={styles.overlay}>
			<div className={styles.container}>
                <header>{level}</header>

                <strong>Congrats</strong>
                <p>You reached a new level</p>

                <button type="button" onClick={closeLevelUpModal}> 
                    <img src="/icons/close.svg" alt="Fechar Modal"/>
                </button>
            </div>
		</div>
	)
}

export default LevelUpModal

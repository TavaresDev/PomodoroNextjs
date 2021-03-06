import React, { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/CompletedChallenges.module.css'

const completedChallenges = () => {

    const {challengesCompleted} =  useContext(ChallengesContext)
    return (
        <div className={styles.completedChallengesContainer}>
            <span>Completed Challenges</span>
            <span> {challengesCompleted}</span>
            
        </div>
    )
}

export default completedChallenges

import React, {useContext} from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'

import styles from '../styles/components/ExperienceBar.module.css'

const ExperienceBar = () => {

   const {currentExperience, experienceToNextLevel} = useContext(ChallengesContext)
   
   const percentToNextLevel = Math.round((currentExperience*100) / experienceToNextLevel)
    // double chek to fix xp bar
   const percentBar =  isNaN(percentToNextLevel) ? 0 : percentToNextLevel
  
    return (
    <header className={styles.experienceBar} >
            <span> 0 xp</span>
            <div>
                <div style={{width: `${percentBar}%`}}/>
                <span className = {styles.currentExperience} style={{left: `${percentBar}%`}} > {currentExperience} xp </span>
            </div>
            <span> {experienceToNextLevel} xp</span>
        </header>
    )
}

export default ExperienceBar

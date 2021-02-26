import { createContext, useState, ReactNode } from "react"
import challenges from '../../challenges.json'

interface Challenge {
    type: 'body' | 'eye'
    description: string
    amount: number
}

interface ChallengesContextData {
    levelUp: () => void
	startNewChallenge: () => void
	resetChallenge: () => void
	completeChallenge: () => void
	level: number
	currentExperience: number
	challengesCompleted: number
    activeChallenge: Challenge
    experienceToNextLevel: number
}

interface ChallengesProviderProps {
    children: ReactNode
}

export const ChallengesContext = createContext({} as ChallengesContextData)


export function ChallengesProvider ({ children }: ChallengesProviderProps) {
	const [level, setLevel] = useState(1)
	const [currentExperience, setCurrentExperience] = useState(0)
	const [challengesCompleted, setChallengesCompleted] = useState(0)
    const [activeChallenge, setActiveChallenge] = useState(null)

    const experienceToNextLevel = Math.pow((level + 1) *4 , 2)

	// helper functions
	const levelUp = () => {
		setLevel(level + 1)
	}
	const startNewChallenge = () => {
		const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
        const challenge = challenges[randomChallengeIndex]
		
		console.log("new Challenge")
        setActiveChallenge(challenge)
	}
    
    const resetChallenge = () => {
        setActiveChallenge(null)
    }

    const completeChallenge = () => {
		// validacao
		if(!activeChallenge) {
			return
		}
		const {amount} = activeChallenge
		let finalExperience = currentExperience + amount
		if(finalExperience >= experienceToNextLevel) {
			finalExperience = finalExperience - experienceToNextLevel
			levelUp()
		}
		setCurrentExperience(finalExperience)
		setActiveChallenge(null)
		setChallengesCompleted(challengesCompleted + 1)
        
        // setActiveChallenge(null)
    }

	return (
		<ChallengesContext.Provider
			value={{
				levelUp,
				startNewChallenge,
                resetChallenge,
				completeChallenge,
				level,
				currentExperience,
				challengesCompleted,
                activeChallenge,
                experienceToNextLevel
			}}>
			{children}
		</ChallengesContext.Provider>
	)
}



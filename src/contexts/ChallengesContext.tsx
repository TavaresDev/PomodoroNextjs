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

	const levelUp = () => {
		setLevel(level + 1)
	}
	const startNewChallenge = () => {
		console.log("new Challenge")

        const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
        const challenge = challenges[randomChallengeIndex]

        setActiveChallenge(challenge)
	}
    
    const resetChallenge = () => {
        
        setActiveChallenge(null)
    }

	return (
		<ChallengesContext.Provider
			value={{
				levelUp,
				startNewChallenge,
                resetChallenge,
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



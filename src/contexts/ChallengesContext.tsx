import { createContext, useState, ReactNode } from "react"


interface ChallengesContextData {
    levelUp: () => void
	startNewChallenge: () => void
	level: number
	currentExperience: number
	challengesCompleted: number
}

interface ChallengesProviderProps {
    children: ReactNode
}

export const ChallengesContext = createContext({} as ChallengesContextData)

const ChallengesProvider = ({ children }: ChallengesProviderProps) => {
	const [level, setLevel] = useState(1)
	const [currentExperience, setCurrentExperience] = useState(0)
	const [challengesCompleted, setChallengesCompleted] = useState(0)

	const levelUp = () => {
		setLevel(level + 1)
	}
	const startNewChallenge = () => {
		console.log("new Challenge")
	}

	return (
		<ChallengesContext.Provider
			value={{
				levelUp,
				startNewChallenge,
				level,
				currentExperience,
				challengesCompleted,
			}}>
			{children}
		</ChallengesContext.Provider>
	)
}

export default ChallengesProvider

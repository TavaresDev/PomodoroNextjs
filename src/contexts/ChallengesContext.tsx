import { createContext, useState, ReactNode, useEffect } from "react"
import Cookies from "js-cookie"
import challenges from "../../challenges.json"
import LevelUpModal from "../components/LevelUpModal"
import StartModal from "./../components/StartModal"

interface Challenge {
	type: "body" | "eye"
	description: string
	amount: number
}

interface ChallengesContextData {
	levelUp: () => void
	startNewChallenge: () => void
	resetChallenge: () => void
	completeChallenge: () => void
	closeLevelUpModal: () => void
	closeStartModal: () => void
	setName: (name:string) => void
	name: string
	level: number
	currentExperience: number
	challengesCompleted: number
	activeChallenge: Challenge
	experienceToNextLevel: number
}

interface ChallengesProviderProps {
	children: ReactNode

	level: number
	currentExperience: number
	challengesCompleted: number
}

export const ChallengesContext = createContext({} as ChallengesContextData)

export function ChallengesProvider({
	children,
	...rest
}: ChallengesProviderProps) {
	const [level, setLevel] = useState(rest.level ?? 1);
	const [currentExperience, setCurrentExperience] = useState(rest.currentExperience ?? 0);
	const [challengesCompleted, setChallengesCompleted] = useState(rest.challengesCompleted ?? 0);
	
	const [activeChallenge, setActiveChallenge] = useState(null)
	
	const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false)
	
	const [isStartModalOpen, setIsStartModalOpen] = useState(true)
	// const [name, setName] = useState(rest.name ?? 'User');
	const [name, setName] = useState('User');

	const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

	useEffect(() => {
		Notification.requestPermission()
	}, [])

	// save data to cookie to be avaiable on the serverside
	useEffect(() => {
		Cookies.set("level", String(level))
		Cookies.set("currentExperience", String(currentExperience))
		Cookies.set("challengesCompleted", String(challengesCompleted))
	}, [level, currentExperience, challengesCompleted])

	// helper functions
	const levelUp = () => {
		setLevel(level + 1)
		setIsLevelUpModalOpen(true)
	}

	const closeLevelUpModal = () => {
		setIsLevelUpModalOpen(false)
	}
	const closeStartModal = () => {
		setIsStartModalOpen(false)
	}
	// const changeName = () => {
	// 	setName()
	// }

	const startNewChallenge = () => {
		const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
		const challenge = challenges[randomChallengeIndex]

		setActiveChallenge(challenge)
		console.log("new Challenge")

		new Audio("/notification.mp3").play()

		if (Notification.permission == "granted") {
		}
		new Notification("New Challenge", {
			body: `To win ${challenge.amount} xp!`,
		})
		console.log("new Challenge2")
	}

	const resetChallenge = () => {
		setActiveChallenge(null)
	}

	const completeChallenge = () => {
		// validacao
		if (!activeChallenge) {
			return
		}
		const { amount } = activeChallenge
		let finalExperience = currentExperience + amount
		if (finalExperience >= experienceToNextLevel) {
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
				closeLevelUpModal,
				closeStartModal,
				setName,
				name,
				level,
				currentExperience,
				challengesCompleted,
				activeChallenge,
				experienceToNextLevel,
			}}>
			{children}

			{isLevelUpModalOpen && <LevelUpModal />}
			{isStartModalOpen && <StartModal />}
		</ChallengesContext.Provider>
	)
}

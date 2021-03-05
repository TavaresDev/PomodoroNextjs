import { createContext, useState, ReactNode, useEffect } from "react"
import Cookies from "js-cookie"
import challenges from "../../challenges.json"
import StartModal from "./../components/StartModal"

interface Challenge {
	type: "body" | "eye"
	description: string
	amount: number
}

interface ProfileContextData {
	// levelUp: () => void
	// startNewChallenge: () => void
	// resetChallenge: () => void
	// completeChallenge: () => void
	closeStartModal: () => void
	name: string
	// currentExperience: number
	// challengesCompleted: number
	// activeChallenge: Challenge
	// experienceToNextLevel: number
}

interface ChallengesProviderProps {
	children: ReactNode

	name: string
	currentExperience: number
	challengesCompleted: number
}

export const ProfileContext = createContext({} as ProfileContextData)

export function ChallengesProvider({children, ...rest}: ChallengesProviderProps) {
	// const [level, setLevel] = useState(rest.level ?? 1);
	// const [currentExperience, setCurrentExperience] = useState(rest.currentExperience ?? 0);
	// const [challengesCompleted, setChallengesCompleted] = useState(rest.challengesCompleted ?? 0);
	
	// const [activeChallenge, setActiveChallenge] = useState(null)

	const [isStartModalOpen, setIsStartModalOpen] = useState(false)

	// const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

	// useEffect(() => {
	// 	Notification.requestPermission()
	// }, [])

	// save data to cookie to be avaiable on the serverside
	// useEffect(() => {
	// 	Cookies.set("level", String(level))
	// 	Cookies.set("currentExperience", String(currentExperience))
	// 	Cookies.set("challengesCompleted", String(challengesCompleted))
	// }, [level, currentExperience, challengesCompleted])

	// helper functions
	// const levelUp = () => {
	// 	setLevel(level + 1)
	// 	setIsLevelUpModalOpen(true)
	// }

	const closeStartModal = () => {
		setIsStartModalOpen(false)
	}
    const name = "andre"
	// const startNewChallenge = () => {
	// 	const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
	// 	const challenge = challenges[randomChallengeIndex]

	// 	setActiveChallenge(challenge)
	// 	console.log("new Challenge")

	// 	new Audio("/notification.mp3").play()

	// 	if (Notification.permission == "granted") {
	// 	}
	// 	new Notification("New Challenge", {
	// 		body: `To win ${challenge.amount} xp!`,
	// 	})
	// 	console.log("new Challenge2")
	// }

	// const resetChallenge = () => {
	// 	setActiveChallenge(null)
	// }

	// const completeChallenge = () => {
	// 	// validacao
	// 	if (!activeChallenge) {
	// 		return
	// 	}
	// 	const { amount } = activeChallenge
	// 	let finalExperience = currentExperience + amount
	// 	if (finalExperience >= experienceToNextLevel) {
	// 		finalExperience = finalExperience - experienceToNextLevel
	// 		levelUp()
	// 	}
	// 	setCurrentExperience(finalExperience)
	// 	setActiveChallenge(null)
	// 	setChallengesCompleted(challengesCompleted + 1)

	// 	// setActiveChallenge(null)
	// }

	return (
		<ProfileContext.Provider
			value={{
				// levelUp,
				// startNewChallenge,
				// resetChallenge,
				// completeChallenge,
				closeStartModal,
				name,
				// currentExperience,
				// challengesCompleted,
				// activeChallenge,
				// experienceToNextLevel,
			}}>
			{children}

			{isStartModalOpen && <StartModal />}
		</ProfileContext.Provider>
	)
}

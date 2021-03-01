import {
	createContext,
	useState,
	ReactNode,
	useContext,
	useEffect,
} from "react"
import { ChallengesContext } from "./ChallengesContext"

interface CountdownContextData {
	minutes: number
	seconds: number
	hasFinished: boolean
	isActive: boolean
	startCountdown: () => void
	resetCountdown: () => void
}

interface CountdownContextProps {
	children: ReactNode
}
let countdownTimeout: NodeJS.Timeout

export const CountdownContext = createContext({} as CountdownContextData)

export function CountdownProvider({ children }: CountdownContextProps) {
	const [sessionTime, setSessionTime] = useState(25 * 60)

	const { startNewChallenge } = useContext(ChallengesContext)

	const [time, setTime] = useState(sessionTime)
	const [isActive, setIsActive] = useState(false)
	const [hasFinished, setHasFinished] = useState(false)

	const minutes = Math.floor(time / 60)
	const seconds = time % 60

	useEffect(() => {
		if (isActive && time > 0) {
			countdownTimeout = setTimeout(() => {
				setTime(time - 1)
			}, 1000)
		} else if (isActive && time == 0) {
			setHasFinished(true)
			setIsActive(false)
			startNewChallenge()
		}
	}, [isActive, time])

	const startCountdown = () => {
		console.log(isActive)
		setIsActive(true)
	}
	const resetCountdown = () => {
		clearTimeout(countdownTimeout)
		console.log(isActive)
		setIsActive(false)
		setTime(sessionTime)
        setHasFinished(false)
	}
	return (
		<CountdownContext.Provider
			value={{
				minutes,
				seconds,
				hasFinished,
				isActive,
				startCountdown,
				resetCountdown,
			}}>
			{children}
		</CountdownContext.Provider>
	)
}

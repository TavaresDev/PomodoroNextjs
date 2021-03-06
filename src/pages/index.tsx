
import { GetServerSideProps } from "next"
import ChallengeBox from "../components/ChallengeBox"
import CompletedChanlanges from "../components/CompletedChallenges"
import Countdown from "../components/Countdown"
import ExperienceBar from "../components/ExperienceBar"
import Profile from "../components/Profile"

import styles from "../styles/pages/Home.module.css"
import { ChallengesProvider } from "../contexts/ChallengesContext"
import { CountdownProvider } from "../contexts/CountdownContext"
import MainSection from "../components/MainSection"

// #jornadainfinita
// #focopraticagrupo
// #neverstoplearning

interface HomeProps {
	level: number
	currentExperience: number
	challengesCompleted: number
}

export default function Home(props: HomeProps) {
	return (
		<>
			<ChallengesProvider
				level={props.level}
				currentExperience={props.currentExperience}
				challengesCompleted={props.challengesCompleted}>
					
				<div className={styles.container}>
					<ExperienceBar />
					<CountdownProvider>

						<MainSection />
					</CountdownProvider>
				</div>
			</ChallengesProvider>
		</>
	)
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	//call api to get data to render on the serverside

	const { level, currentExperience, challengesCompleted } = ctx.req.cookies

	return {
		props: {
			level: level === undefined ? 1 : Number(level),
			currentExperience:
				currentExperience === undefined ? 0 : Number(currentExperience),
			challengesCompleted:
				challengesCompleted === undefined ? 0 : Number(challengesCompleted),
		},
	}
}

import Head from "next/head"
import ChallengeBox from "../components/ChallengeBox"
import CompletedChanlanges from "../components/CompletedChallenges"
import Countdown from "../components/Countdown"
import ExperienceBar from "../components/ExperienceBar"
import Profile from "../components/Profile"

import styles from "../styles/pages/Home.module.css"

// #jornadainfinita

export default function Home() {
	return (
		<>
			<div className={styles.container}>
				<ExperienceBar />

				<section>
					<div>
						<Head>
							<title>Pomodoro</title>
						</Head>
						<Profile />
						<CompletedChanlanges />
						<Countdown />
					</div>
					<div>
						<ChallengeBox/>
					</div>
				</section>
			</div>
		</>
	)
}

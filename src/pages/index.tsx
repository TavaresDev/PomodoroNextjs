
import Head from "next/head"
import CompletedChanlanges from "../components/CompletedChanlanges"
import Countdown from "../components/Countdown"
import ExperienceBar from "../components/ExperienceBar"
import Profile from "../components/Profile"

import styles from '../styles/pages/Home.module.css'




export default function Home() {
	return (
		<>
			<div className={styles.container}>
				<ExperienceBar />

        <section>
          <div >
			  <Head>
				  <title>Pomodoro</title>
			  </Head>
            <Profile/>
			<CompletedChanlanges/>
			<Countdown/>
          </div>
          <div></div>
          
        </section>
				
			</div>
		</>
	)
}

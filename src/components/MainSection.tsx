import React, { useContext, useEffect } from "react"
import Head from "next/head"
import ChallengeBox from "../components/ChallengeBox"
import CompletedChanlanges from "../components/CompletedChallenges"
import Countdown from "../components/Countdown"
import ExperienceBar from "../components/ExperienceBar"
import { CountdownContext } from "../contexts/CountdownContext"
import Profile from "../components/Profile"

const MainSection = () => {
	const { minutes, seconds, hasFinished, isActive } = useContext(CountdownContext)

    // useEffect(() => {

       
    // }, [isActive])

    // const iconLink = () => {
    //     if(isActive) {
    //         return "GO"
    //     } else {
    //         return "stop"
    //     }
    // }


	return (
		<>
			<Head>
                {/* https://www.transparentpng.com/cats/circle-1344.html */}
                {isActive ? <link rel="shortcut icon" href="/icons/redCircle.ico" type="image/x-icon" />  : <link rel="shortcut icon" href="/icons/ycircle.ico" type="image/x-icon"/>}
				<title>
					{" "}
					{minutes.toLocaleString(undefined, {
						minimumIntegerDigits: 2,
					})}{" "}
					: {seconds.toLocaleString(undefined, { minimumIntegerDigits: 2 })}
				</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<section>
				<div>
					<Profile />
					<CompletedChanlanges />
					<Countdown />
				</div>
				<div>
					<ChallengeBox />
				</div>
			</section>
		</>
	)
}

export default MainSection

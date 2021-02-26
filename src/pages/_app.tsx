import Head from "next/head"
import { ChallengesProvider } from "../contexts/ChallengesContext"
import { CountdownProvider } from "../contexts/CountdownContext"

import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
	return (
		<>
			<ChallengesProvider>
				<CountdownProvider>
					<Component {...pageProps} />
				</CountdownProvider>
			</ChallengesProvider>
		</>
	)
}

export default MyApp

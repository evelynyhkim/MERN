import "./App.css"
import React from "react"
import {Router, Link, navigate} from "@reach/router"
import Home from "./components/Home.js"
import NumOrWord from "./components/NumOrWord.js"
//import Wrd from "./components/Wrd.js"
import Hello from "./components/Hello"

function App() {
	return (
		<div className="App">
			<Router>
				<Home path="/home" />
				<NumOrWord path="/:thing" />
				<Hello path="/hello/:col/:bgCol" />
			</Router>
		</div>
	)
}

export default App

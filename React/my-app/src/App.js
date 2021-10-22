import "./App.css"
import React from "react"
import {Router, Link, navigate} from "@reach/router"
import Home from "./components/Home.js"
import Num from "./components/Num.js"
import Word from "./components/Wd.js"
import Hello from "./components/Hello"

function App() {
	return (
		<div className="App">
			<Router>
				<Home path="/home" />
				<Num path="/:num" />
				<Wd path="/:wd" />
				<Hello path="/hello/:col/:bgCol" />
			</Router>
		</div>
	)
}

export default App

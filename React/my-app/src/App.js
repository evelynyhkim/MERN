import "./App.css"
import React, {useState} from "react"
import DisplayBoxes from "./components/DisplayBoxes"
import BoxForm from "./components/BoxForm"

function App() {
	const [boxes, setBoxes] = useState([])

	function handleBoxSubmit(arr) {
		setBoxes(arr)
	}

	return (
		<div className="App">
			<BoxForm boxes={boxes} handleSubmit={handleBoxSubmit} />
			<DisplayBoxes boxes={boxes} />
		</div>
	)
}

export default App

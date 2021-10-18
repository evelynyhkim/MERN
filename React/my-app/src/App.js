import "./App.css"
import React, {useState} from "react"
import DisplayBoxes from "./components/DisplayBoxes"
import BoxForm from "./components/BoxForm"
import Counter from "./components/Counter"

function App() {
	const [boxes, setBoxes] = useState([])

	function handleBoxSubmit(arr) {
		setBoxes(arr)
	}

	return (
		<div className="App">
			<BoxForm boxes={boxes} handleSubmit={handleBoxSubmit} />
			<DisplayBoxes boxes={boxes} />
			<Counter
				render={({increment, count}) => (
					<>
						<h2>Current Count is {count}</h2>
						<button onClick={increment}>Add one</button>
					</>
				)}
				initialVal={5}
			/>
		</div>
	)
}

export default App

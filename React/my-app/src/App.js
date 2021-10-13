import "./App.css"
import React, {useState} from "react"
import Tabs from "./components/Tabs"

function App() {
	const tabs = [
		{label: "Tab 1", content: "Tab 1 content"},
		{label: "Tab 2", content: "Tab 2 content"},
		{label: "Tab 3", content: "Tab 3 content"},
	]
	return (
		<div className="App">
			<Tabs tabs={tabs} />
		</div>
	) //<Tabs tabs={tabs} setCurrentTab={setCurrentTab} />
}

export default App

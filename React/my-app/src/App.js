import "./App.css"
import React, {useState, useEffect} from "react"

function App() {
	const [results, setResults] = useState([])

	useEffect(
		() =>
			fetch("https://pokeapi.co/api/v2/pokemon/")
				.then((res) => res.json())
				.then((data) => {
					setResults(data.results)
					console.log(results[0])
				})
				.catch((err) => console.log(err)),
		[]
	)

	return (
		<ul className="App">
			{results.map((item, i) => (
				<li>{item.name}</li>
			))}
		</ul>
	)
}

export default App

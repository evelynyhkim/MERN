import "./App.css"
import React, {useState, useEffect} from "react"
import axios from "axios"

function App() {
	const [results, setResults] = useState([])

	useEffect(
		() =>
			axios
				.get("https://pokeapi.co/api/v2/pokemon/")
				// .then((res) => {
				// 	console.log(res)
				// 	//return res.json()
				// 	return res
				// })
				.then((res) => {
					setResults(res.data.results)
					console.log(results)
				})
				.catch((err) => console.log(err)),
		[]
	)

	return <ul className="App">{results && results.map((item, i) => <li>{item.name}</li>)}</ul>
}

export default App

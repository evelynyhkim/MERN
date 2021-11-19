import "./App.css"
import Person from "./components/Person"
import PersonCard from "./components/PersonCard"

function App() {
	var people = [
		{lastName: "Doe", firstName: "Jane", age: 45, hairColor: "Black"},
		{lastName: "Smith", firstName: "John", age: 88, hairColor: "Brown"},
		{lastName: "Fillmore", firstName: "Millard", age: 50, hairColor: "Brown"},
		{lastName: "Smith", firstName: "Maria", age: 62, hairColor: "Brown"},
	]

	return (
		<div class="App">
			<PersonCard lastName={people[0].lastName} firstName={people[0].firstName} age={people[0].age} hairColor={people[0].hairColor} />
			<PersonCard lastName={people[1].lastName} firstName={people[1].firstName} age={people[1].age} hairColor={people[1].hairColor} />
			<PersonCard lastName={people[2].lastName} firstName={people[2].firstName} age={people[2].age} hairColor={people[2].hairColor} />
			<PersonCard lastName={people[3].lastName} firstName={people[3].firstName} age={people[3].age} hairColor={people[3].hairColor} />
		</div>
	)
}

export default App

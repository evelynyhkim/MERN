import "./App.css"
import Person from "./components/Person"
import Form from "./components/Form"
import UserForm from "./components/UserForm"

function App() {
	/*var people = [
		{lastName: "Doe", firstName: "Jane", age: 45, hairColor: "Black"},
		{lastName: "Smith", firstName: "John", age: 88, hairColor: "Brown"},
		// {lastName: "Fillmore", firstName: "Millard", age: 50, hairColor: "Brown"},
		// {lastName: "Smith", firstName: "Maria", age: 62, hairColor: "Brown"},
	]*/

	return (
		<div class="App">
			<UserForm />
		</div>
	)
}

export default App

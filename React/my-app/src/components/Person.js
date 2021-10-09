import React, {useState} from "react"

function Person({firstName, lastName, age, hairColor}) {
	const [userage, setUserage] = useState(age)
	const handleBirthdayClick = () => setUserage(userage + 1)
	return (
		<>
			<h2>
				{lastName}, {firstName}
			</h2>
			<p>age: {userage}</p>
			<p>Hair Color: {hairColor}</p>
			<button onClick={handleBirthdayClick}>
				Birthday Button for {firstName} {lastName}
			</button>
		</>
	)
}

export default Person

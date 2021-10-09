function Person(props) {
	return (
		<>
			<h2>
				{props.lastName}, {props.firstName}
			</h2>
			<p>age: {props.age}</p>
			<p>Hair Color: {props.hairColor}</p>
		</>
	)
}

export default Person

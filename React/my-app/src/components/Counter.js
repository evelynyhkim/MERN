import React, {useState} from "react"

function Counter({render, initialVal}) {
	const [count, setCount] = useState(initialVal)

	function increment() {
		setCount(count < 10 ? count + 1 : 10)
	}

	function decrement() {
		setCount(count > 0 ? count - 1 : 0)
	}

	return render({count, increment, decrement})
}

export default Counter

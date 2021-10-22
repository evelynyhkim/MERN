import React from "react"

function NumOrWord({thing}) {
	const title = isNaN(thing) ? "word" : "number"
	return (
		<p>
			The {title} is: {thing}
		</p>
	)
}

export default NumOrWord

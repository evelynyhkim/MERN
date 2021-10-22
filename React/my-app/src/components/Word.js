import React from "react"

function Word({word}) {
	return <p>{isNaN(word) && The word is: {word}}</p>
}

export default Word

import React from "react"

function Num({num}) {
	return <p>{!isNaN(num) && The number is: {num}}</p>
}

export default Num

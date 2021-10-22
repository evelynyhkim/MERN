import React from "react"

function Num({num}) {
	return <div>{!isNaN(num) && <p>The number is: {num}</p>}</div>
}

export default Num

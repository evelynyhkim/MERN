import React from "react"

function Hello({col, bgCol}) {
	const stl = {color: col, backgroundColor: bgCol, textAlign: "center"}
	return <p style={stl}>Hello</p>
}

export default Hello

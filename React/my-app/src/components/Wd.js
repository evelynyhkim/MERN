import React from "react"

function Wd({wd}) {
	return <div>{isNaN(wd) && <p>The wd is: {wd}</p>}</div>
	//return <p>The wd is: {wd}</p>
}

export default Wd

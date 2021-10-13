import React from "react"
import styles from "./DisplayBoxes.module.css"

function DisplayBoxes({boxes}) {
	//console.log("boxes are " + typeof boxes)
	return (
		<div className={styles.boxContainer}>
			{boxes.map(function (box, index) {
				//console.log("this box is " + box)
				return <div className={styles.boxes} style={{backgroundColor: box}} key={index}></div>
			})}
		</div>
	) //style={{backgroundColor: box}}
}

export default DisplayBoxes

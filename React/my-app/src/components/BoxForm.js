import React from "react"
import styles from "./BoxForm.module.css"

function BoxForm({boxes, handleSubmit}) {
	return (
		<form>
			<label htmlFor="color" style={{marginRight: "10px"}}>
				Color
			</label>
			<input type="text" id="color" className={styles.textInput} />
			<input
				type="submit"
				value="Add"
				onClick={(e) => {
					e.preventDefault()
					const el = document.getElementById("color")
					handleSubmit([...boxes, el.value])
					el.value = ""
				}}
			/>
		</form>
	)
}
export default BoxForm

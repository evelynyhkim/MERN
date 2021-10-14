import React, {useState} from "react"

function Form({items, handleSubmit, newItem, handleNewItem}) {
	//const [lnError, setLnError] = useState("Last Name must be at least 2 characters")

	return (
		<form>
			<input type="text" id="newItem" value={newItem} />
			<input type="submit" value="Add" onClick={handleNewItem} />
		</form>
	)
}

export default Form

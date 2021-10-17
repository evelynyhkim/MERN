import React from "react"

function ItemForm({newItem, setNewItem, itemList, setItemList}) {
	const btnStyle = {
		color: "white",
		backgroundColor: "blue",
		width: "50px",
		height: "30px",
		borderRadius: "5px",
		border: "none",
	}
	function handleItemSubmit(e) {
		e.preventDefault()
		setItemList([...itemList, newItem])
		setNewItem({txt: "", isDone: false})
	}
	return (
		<form className="item-form" onSubmit={handleItemSubmit}>
			<input value={newItem.txt} onChange={(e) => setNewItem({txt: e.target.value, isDone: false})} type="text" />
			<input type="submit" value="Add" style={btnStyle} />
		</form>
	)
}

export default ItemForm

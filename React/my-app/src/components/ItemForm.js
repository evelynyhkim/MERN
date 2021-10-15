import React from "react"

function ItemForm({newItem, setNewItem, itemList, setItemList}) {
	function handleItemSubmit(e) {
		e.preventDefault()
		setItemList([...itemList, newItem])
		setNewItem({txt: "", isDone: false})
	}
	return (
		<form onSubmit={handleItemSubmit}>
			<input value={newItem.txt} onChange={(e) => setNewItem({txt: e.target.value, isDone: false})} type="text" />
			<input type="submit" value="Add" />
		</form>
	)
}

export default ItemForm

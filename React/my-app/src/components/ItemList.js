import React from "react"

function ItemList({itemList, setItemList}) {
	function chooseStyle(val) {
		//return val ? "done" : "notDone"
		if (val === true) return "done"
		else return ""
	}
	function handleDoneToggle(idxToToggle) {
		let newList = itemList.map((item, idx) => {
			if (idx !== idxToToggle) {
				return item
			} else {
				//Here we're mutating the arrary, but it's okay
				item.isDone = !item.isDone
				return item

				//let itm = {...item, isDone: !item.isDone}
				//return itm
			}
		})
		setItemList(newList)
	}
	const handleDeleteClick = (idxToDelete) => {
		let newList = itemList.filter((item, idx) => idx !== idxToDelete)
		setItemList(newList)
	}

	return itemList.map((item, idx) => {
		return (
			<div key={idx} className={`item-line ${chooseStyle(item.isDone)}`}>
				<label htmlFor={idx}>{item.txt}</label>
				<input checked={item.isDone} onChange={() => handleDoneToggle(idx)} id={idx} type="checkbox" />
				<button
					style={{backgroundColor: "black", color: "white", border: "none", borderRadius: "3px", padding: "3px 15px"}}
					onClick={() => {
						handleDeleteClick(idx)
					}}
				>
					Delete
				</button>
			</div>
		)
	})
}

export default ItemList

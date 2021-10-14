import React, {useState} from "react"

function ItemList({itemList, setItemList}) {
	const handleDoneToggle = (e, idxToUpdate) => {
		const newList = itemList.map((item, idx) => {
			//console.log(item)
			if (idx == idxToUpdate) item.isDone = !item.isDone
			return item
		})
		//onsole.log(newList)
		setItemList(newList)
	}
	const selectedStyle = (isDone) => {
		isDone ? "done" : "notDone"
	}

	return (
		<>
			{itemList.map((item, idx) => {
				//let bln = false
				return (
					<div key={idx} className="item {()=>selectedStyle(item.isDone)}">
						<label htmlFor={idx}>{item.txt}</label>
						<input id={idx} type="checkbox" checked={item.isDone} onClick={(e) => handleDoneToggle(e, idx)} />
					</div>
				)
			})}
		</>
	)
}

export default ItemList

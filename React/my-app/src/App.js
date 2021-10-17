import "./App.css"
import React, {useState} from "react"
//import ItemList from "./components/ItemList"
import ItemForm from "./components/ItemForm"

function App() {
	const initialItems = [
		{txt: "item 1", isDone: false},
		{txt: "item 2", isDone: true},
	]

	const [itemList, setItemList] = useState(initialItems)
	const [newItem, setNewItem] = useState({})

	function chooseStyle(val) {
		//return val ? "done" : "notDone"
		if (val === true) return "done"
		else return ""
	}

	function handleDoneToggle(e, idxToToggle) {
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
	return (
		<div className="App">
			<ItemForm newItem={newItem} setNewItem={setNewItem} itemList={itemList} setItemList={setItemList} />
			{/* <form onSubmit={handleItemSubmit}>
				<input value={newItem.txt} onChange={(e) => setNewItem({txt: e.target.value, isDone: false})} type="text" />
				<input type="submit" value="Add" />
			</form> */}
			{itemList.map((item, idx) => {
				return (
					<div key={idx} className={`item-line ${chooseStyle(item.isDone)}`}>
						<label htmlFor={idx}>{item.txt}</label>
						<input checked={item.isDone} onChange={(e) => handleDoneToggle(e, idx)} id={idx} type="checkbox" />
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
			})}
		</div>
	) //() => selectedStyle(item.isDone)
	// return (
	// 	<div className="App">
	// 		<ItemList handleDoneToggle={handleDoneToggle} itemList={itemList} setItemList={setItemList} />
	// 	</div>
	// ) //<ItemForm itemList={itemList} handleItemAdd={handleItemSubmit} />
}

export default App
// const selectedStyle = (isDone) => {
// 	const r = isDone ? "done" : "notDone"
// 	console.log("+++selected style is " + r)
// 	return r
// }
// const handleDoneToggle = (e, idxToUpdate) => {
// 	const newList = itemList.map((item, idx) => {
// 		console.log("Starting handleDoneToggle for index ", idxToUpdate, item)
// 		if (idx === idxToUpdate) {
// 			newIsDone = !item.isDone
// 			let r = {txt: item.txt, isDone: newIsDone}
// 			return r
// 		} else {
// 			return item
// 		}
// 	})
// 	setItemList(newList)
// 	console.log("newList is " + newList)
// }

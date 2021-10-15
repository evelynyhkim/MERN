import "./App.css"
import React, {useState} from "react"
//import ItemList from "./components/ItemList"
//import ItemForm from "./components/ItemForm"

function App() {
	const initialItems = [
		{txt: "item 1", isDone: false},
		{txt: "item 2", isDone: true},
	]

	const [itemList, setItemList] = useState(initialItems)
	const [newItem, setNewItem] = useState({})

	function handleItemSubmit(e) {
		e.preventDefault()
		//itemList.push(newItem)
		setNewItem({txt: "", isDone: false})
		setItemList([...itemList, newItem])
		//setNewItem({})
	}

	function chooseStyle(val) {
		return val ? "done" : "notDone"
	}

	return (
		<>
			<form onSubmit={handleItemSubmit}>
				<input onChange={(e) => setNewItem({txt: e.target.value, isDone: false})} type="text" />
				<input type="submit" value="Add" />
			</form>
			{itemList.map((item, idx) => {
				//let bln = false
				//let c = selectedStyle(item.isDone)
				return (
					<div key={idx} className={() => chooseStyle(item.isDone)}>
						<label htmlFor={idx}>{item.txt}</label>
						<input id={idx} type="checkbox" checked={item.isDone} />
					</div>
				)
			})}
		</>
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

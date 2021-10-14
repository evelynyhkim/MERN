import "./App.css"
import React, {useState} from "react"
import ItemList from "./components/ItemList"
//import ItemForm from "./components/ItemForm"

function App() {
	const initialItems = [
		{txt: "item 1", isDone: false},
		{txt: "item 2", isDone: true},
	]

	const [itemList, setItemList] = useState(initialItems)
	//const [newItem, setNewItem] = useState({})

	function handleItemSubmit() {
		//setItemList()
	}

	return (
		<div className="App">
			<ItemList itemList={itemList} setItemList={setItemList} />
		</div>
	) //<ItemForm itemList={itemList} handleItemAdd={handleItemSubmit} />
}

export default App

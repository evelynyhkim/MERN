import "./App.css"
import React, {useState} from "react"
//import ItemList from "./components/ItemList"
import ItemForm from "./components/ItemForm"
import ItemList from "./components/ItemList"

function App() {
	const [itemList, setItemList] = useState([])
	const [newItem, setNewItem] = useState({})

	return (
		<div className="App">
			<ItemForm newItem={newItem} setNewItem={setNewItem} itemList={itemList} setItemList={setItemList} />
			<ItemList itemList={itemList} setItemList={setItemList} />
		</div>
	)
}

export default App

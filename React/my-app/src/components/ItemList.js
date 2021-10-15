import React, {useState} from "react"
import "../App.css"
import styles from "./ItemList.module.css"

function ItemList({itemList, setItemList, handleDoneToggle}) {
	// return (
	// 	<>
	// 		{itemList.map((item, idx) => {
	// 			//let bln = false
	// 			let c = selectedStyle(item.isDone)
	// 			console.log("class will be " + c)
	// 			c = "styles." + c
	// 			return (
	// 				<div key={idx} className={c}>
	// 					<label htmlFor={idx}>{item.txt}</label>
	// 					<input id={idx} type="checkbox" checked={item.isDone} onChange={(e) => handleDoneToggle(e, idx)} />
	// 				</div>
	// 			)
	// 		})}
	// 	</>
	//)
}

export default ItemList

import React, {useState} from "react"

function Tabs({tabs}) {
	const tabStyle = {
		width: "150px",
		height: "50px",
		marginRight: "10px",
		marginBottom: "10px",
		border: "black 1px solid",
		textAlign: "center",
		lineHeight: "50px",
		fontSize: "1.5em",
	}
	const tabContentStyle = {
		width: "550px",
		height: "150px",
		border: "black 1px solid",
		padding: "10px",
	}

	const [currentTab, setCurrentTab] = useState({label: "Initial tab", content: "Initial content"})
	async function handleTabClick(e, tab) {
		//console.log(tab.label, tab.content)
		console.log(tab.label)
		const obj = {label: tab.label, content: tab.content}
		await setCurrentTab(obj)
		//e.target.style.color = "red"
		await console.log(currentTab)
		document.getElementsByName(currentTab.label)
	}
	return (
		<>
			<div style={{display: "flex", justifyContent: "flex-start"}}>
				{tabs.map((tab, index) => (
					<div key={index} style={tabStyle} name={tab.label} onClick={(e) => handleTabClick(e, tab)}>
						{tab.label}
					</div>
				))}
			</div>
			<div style={tabContentStyle}>{currentTab.content}</div>
		</>
	)
}

export default Tabs

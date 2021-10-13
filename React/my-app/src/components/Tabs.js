import React, {useState} from "react"

function Tabs({tabs, setTabs}) {
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
		fontSize: "1.2em",
	}

	const [currentTab, setCurrentTab] = useState({label: "", content: ""})
	function handleTabClick(e, tab) {
		setCurrentTab(tab)
		e.target.style.color = "white"
		e.target.style.backgroundColor = "black"
		//console.log(currentTab.label)
		if (currentTab.label) {
			document.getElementsByName(currentTab.label)[0].style.color = "black"
			document.getElementsByName(currentTab.label)[0].style.backgroundColor = "white"
		}
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

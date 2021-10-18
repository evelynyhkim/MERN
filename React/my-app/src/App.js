import React from "react"
import "./App.css"
import Header from "./components/Header"
import Navigation from "./components/Navigation"
import Main from "./components/Main"
import SubContents from "./components/SubContents"
import Advertisement from "./components/Advertisement"

function App() {
	return (
		<div className="app">
			        
			<Header className="Header" />
			<div className="flex">
				        
				<Navigation className="Nav" />
				        
				<Main className="Main">
					            
					<SubContents className="Sub" />
					            
					<SubContents className="Sub" />
					            
					<SubContents className="Sub" />
					            
					<Advertisement className="Ads" />
					        
				</Main>
			</div>
			    
		</div>
	)
}

export default App

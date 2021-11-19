import React, {Component} from 'react'

class PersonCard extends Component{
    constructor(props){
        super(props)
        this.state = {
            age: props.age
        }
    }
    render(){
        const {firstName, lastName, age, hairColor} = this.props
    
        return (<>
        <h2>{lastName}, {firstName}</h2>
        <p>Age: {this.state.age}</p>
        <p>Hair Color: {hairColor}</p>
        <button onClick={e=>this.setState({age: this.state.age+1})}>Birthday has arrived!</button>
    </>)
    }
}

export default PersonCard
import React, {useReducer} from "react"

function Form() {
	const initialState = {
		firstName: {
			value: "",
			error: null,
		},
		lastName: {
			value: "",
			error: null,
		},
		email: {
			value: "",
			error: null,
		},
	}

	const [state, dispatch] = useReducer(reducer, initialState)

	function reducer(state, action) {
		const {id, payload} = action
		let err = ""
		switch (id) {
			case "firstName":
				if (payload.length < 2) err = "firstName too short"
				break
			case "lastName":
				if (payload.length < 2) err = "lastName too short"
				break
			case "email":
				if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(payload)) err = "invalid email"
				break
			default:
				break
		}
		return {...state, [id]: {value: payload, error: err}}
	}
	function handleChange(e) {
		const {id, value} = e.target
		dispatch({id: id, payload: value})
	}

	return (
		<>
			<form>
				<div>
					<label htmlFor="firstName">First Name</label>
					<input type="text" id="firstName" value={state.firstName.value} onChange={handleChange} />
					{state.firstName.error !== null && <p className="error">{state.firstName.error}</p>}
				</div>
				<div>
					<label htmlFor="lastName">Last Name</label>
					<input type="text" id="lastName" value={state.lastName.value} onChange={handleChange} />
					{state.lastName.error !== null && <p className="error">{state.lastName.error}</p>}
				</div>
				<div>
					<label htmlFor="email">Email</label>
					<input type="text" id="email" value={state.email.value} onChange={handleChange} />
					{state.email.error !== null && <p className="error">{state.email.error}</p>}
				</div>
			</form>
		</>
	)
}

export default Form

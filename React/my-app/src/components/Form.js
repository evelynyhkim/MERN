import React, {useState} from "react"

function Form() {
	const [firstName, setFirstName] = useState("")
	const [lastName, setLastName] = useState("")
	const [email, setEmail] = useState("")
	const [pw, setPw] = useState("")
	const [confirmPw, setConfirmPw] = useState("")
	const [fnError, setFnError] = useState("First Name must be at least 2 characters")
	const [lnError, setLnError] = useState("Last Name must be at least 2 characters")
	const [emailError, setEmailError] = useState("EMail must be at least 2 characters")
	const [pwError, setPwError] = useState("")
	const [confirmPwError, setConfirmPwError] = useState("")

	//an alternative solution is not using state for error messages and instead using existing hooks (firstName, email, pw, etc.)
	//directly in the return value. Change will be tracked by utilizing these hooks.
	function handleFirstName(val) {
		setFirstName(val)
		setFnError(val.length < 2 ? "First Name must be at least 2 characters" : "")
	}

	function handleLastName(val) {
		setLastName(val)
		setLnError(val.length < 2 ? "Last Name must be at least 2 characters" : "")
	}

	function handleEmail(val) {
		setEmail(val)
		setEmailError(val.length < 5 ? "Email must be at least 5 characters" : "")
	}

	function handlePw(val) {
		setPw(val)
		setPwError(val.length < 8 ? "Password must be at least 8 characters" : "")
	}

	function handleConfirmPw(val) {
		setConfirmPw(val)
		var msg = ""
		msg += val.length < 8 ? "Email must be at least 8 characters. " : ""
		msg += val != pw ? "Passwords must match. " : ""
		setConfirmPwError(msg)
	}

	return (
		<>
			<form>
				<div class="form-line">
					<label for="firstName">First Name</label>
					<input type="text" id="firstName" value={firstName} onChange={(e) => handleFirstName(e.target.value)} />
				</div>
				{fnError && <p>{fnError}</p>}
				<div class="form-line">
					<label for="lastName">Last Name</label>
					<input type="text" id="lastName" value={lastName} onChange={(e) => handleLastName(e.target.value)} />
				</div>
				{lnError && <p>{lnError}</p>}
				<div class="form-line">
					<label for="email">Email</label>
					<input type="text" id="email" value={email} onChange={(e) => handleEmail(e.target.value)} />
				</div>
				{emailError && <p>{emailError}</p>}
				<div class="form-line">
					<label for="pw">Password</label>
					<input type="text" id="pw" value={pw} onChange={(e) => handlePw(e.target.value)} />
				</div>
				{pwError && <p>{pwError}</p>}
				<div class="form-line">
					<label for="confirmPw">Confirm Password</label>
					<input type="text" id="confirmPw" value={confirmPw} onChange={(e) => handleConfirmPw(e.target.value)} />
				</div>
				{confirmPwError && <p>{confirmPwError}</p>}
			</form>
		</>
	)
}

export default Form

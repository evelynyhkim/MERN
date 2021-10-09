import React, {useState} from "react"

function Form() {
	const [firstName, setFirstName] = useState("")
	const [lastName, setLastName] = useState("")
	const [email, setEmail] = useState("")
	const [pw, setPw] = useState("")
	const [confirmPw, setConfirmPw] = useState("")

	return (
		<>
			<form>
				<div class="form-line">
					<label for="firstName">First Name</label>
					<input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
				</div>
				<div class="form-line">
					<label for="lastName">Last Name</label>
					<input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
				</div>
				<div class="form-line">
					<label for="email">Email</label>
					<input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
				</div>
				<div class="form-line">
					<label for="pw">Password</label>
					<input type="text" id="pw" value={pw} onChange={(e) => setPw(e.target.value)} />
				</div>
				<div class="form-line">
					<label for="confirmPw">Confirm Password</label>
					<input type="text" id="confirmPw" value={confirmPw} onChange={(e) => setConfirmPw(e.target.value)} />
				</div>
			</form>
			<>
				<h3>Your Form Data</h3>
				<p>First Name: {firstName}</p>
				<p>Last Name: {lastName}</p>
				<p>Email: {email}</p>
				<p>Password: {pw}</p>
				<p>Confirm Password: {confirmPw}</p>
			</>
		</>
	)
}

export default Form

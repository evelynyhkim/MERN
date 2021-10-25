const express = require("express")
const faker = require("faker")
const app = express()

const sampleUser = {firstName: "Reimu", lastName: "Hakurei"}

const createUser = () => {
	const newUser = {
		firstName: faker.name.firstName(),
		lastName: faker.name.lastName(),
	}
	return newUser
}

const createCompany = () => {
	return {
		companyName: faker.company.companyName(),
		companySuffix: faker.company.companySuffix(),
		catchPhrase: faker.company.catchPhrase(),
	}
}

app.get("/api/users/new", (req, res) => {
	const r = createUser()
	//let r = sampleUser
	console.log(r)
	res.json(r)
})

app.get("/api/companies/new", (req, res) => {
	res.json(createCompany())
})

app.get("/api/user/company", (req, res) => {
	res.json({user: createUser(), company: createCompany()})
	//OR res.json([createUser(), createCompany()])
})

const server = app.listen(8000, () => console.log("listing at port 8000"))

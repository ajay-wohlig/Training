const fs = require('fs')

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)

data.title = ("Immortals Of Meluha")

data.author = ("Abc")

const updatedJSON = JSON.stringify(data)

fs.writeFileSync('1-json.json',updatedJSON)
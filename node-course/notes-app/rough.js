const async = require('async')
// const fs = require('fs')

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)

// data.title = ("Immortals Of Meluha")

// data.author = ("Abc")

// const updatedJSON = JSON.stringify(data)

// fs.writeFileSync('1-json.json',updatedJSON)

async.map(['file1','file2','file3'], fs.stat, function(err, results) {
    // results is now an array of stats for each file
});
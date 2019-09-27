const fs = require('fs')
const chalk = require('chalk')


//Adding a note

//const addNote = function(title,body){
const addNote = (title,body) => {
    const notes = loadnotes()

    // const duplicateNotes = notes.filter(function(note){
    //     return note.title==title
    // })
    const duplicateNotes = notes.filter((note) => note.title == title)

    if(duplicateNotes.length == 0){
        notes.push({
            title: title,
            body: body
        })
        savenotes(notes)
        console.log("Note added") 
    }
    else{
        console.log("Note title already in use")
    }
}

//Removing a note

//const removeNote = function(title){
const removeNote = (title) => {
    const notes = loadnotes()
    const uniqueNotes = notes.filter(function(note){
        return note.title != title
    })
    if(uniqueNotes.length == notes.length){
        console.log(chalk.red("Note not found"))
    }
    else{
        savenotes(uniqueNotes)
        console.log(chalk.green("Note Removeed"))
    }
}

//Listing all notes

const listNotes = () => {
    const notes = loadnotes()
    notes.filter((note) => {
        console.log(note.title)
    })
}

//Saving a note

//const savenotes = function(notes){
const savenotes = (notes) => {
     const dataJSON=JSON.stringify(notes)
     fs.writeFileSync('notes.json',dataJSON)
}

//const loadnotes = function(){
const loadnotes = () => {
    
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch(e){
            return []
    }

}
module.exports={
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes
}
const notes = require("./notes.js")
const chalk = require("chalk")
const yargs = require('yargs')

//console.log(process.argv)

//create a add command

yargs.command({

    command: 'add',
    describe: 'Add a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    // handler: function(argv){
    //     notes.addNote(argv.title,argv.body)

    handler(argv){
        notes.addNote(argv.title,argv.body)
    }
})

//create remove command

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder:{
        title:{
            describe: 'note title',
            demandOption: 'true',
            type: 'string'
        }
    },

    // handler: function(argv){
    //     notes.removeNote(argv.title)
    // }

    handler(argv){
        notes.removeNote(argv.title)
        
    }
})

//create list command

yargs.command({
    command: 'list',
    describe: 'listing the notes',
    // handler:function(){
    //     notes.listNotes()
    // }
    handler(){
        notes.listNotes()
    }
})
//create read command

yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function(){
        console.log('reading out notes')
    }
})

yargs.parse()
//console.log(yargs.argv)
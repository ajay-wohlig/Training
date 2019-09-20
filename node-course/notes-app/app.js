const yargs = require('yargs')
const notes = require('./notes.js')

//create add command
yargs.command({
    command: 'add',
    describe: 'add a note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: 'true',
            type: 'string' 
        },
        body: {
            describe: 'Note body',
            demandOption: 'true',
            type: 'string'
        }
    },
    handler: function(argv){
        notes.addNotes(argv.title,argv.body)

    }
})
//create remove command

yargs.command({
    command: 'remove',
    describe: 'remove a command',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: 'true',
            type: 'string'
        }
    },
    handler: function(argv){
        notes.removeNote(argv.title)
    }
})




yargs.parse()
//console.log(yargs.argv)

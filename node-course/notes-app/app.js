const yargs = require('yargs')

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
        console.log('Title: ',argv.title)
        console.log('Body: ',argv.body)

    }
})
//create remove command

yargs.command({
    command: 'remove',
    describe: 'remove a command',
    handler: function(){
        console.log("Removing a command")
    }
})




console.log(yargs.argv)

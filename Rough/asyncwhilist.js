const async = require('async')
var count = 0;
async.whilst(
    function test(callback) { callback(null, count < 5)},
    function iter(callback) {
        count++;
        setTimeout(function() {
            console.log(count+" second has passed")
            callback(null, count);
        }, 1000);
    },
    function (err, n) {
        if(err){
            console.log(err)
        }
         console.log(count+" seconds have passed")
    }
);

// var async = require('async');

// var counter = 0;

// async.whilst(
// 	function testCondition(callback) { callback(null, counter < 5) },
// 	function increaseCounter(callback) {
// 		counter++;
// 		console.log('counter is now', counter);

// 		//Simulate ajax/processing
// 		//callback must be called once this function has completed, it takes an optional error argument
// 		//setTimeout(callback, 1000);
// 		//so if there's an error, you do callback(err) and it will immediately end.
// 		setTimeout(callback('err'), 1000);
// 	},
// 	function callback(err) {
// 		if (err) {
// 			console.log("Error "+err);
// 			return;
// 		}

// 		console.log('Job complete');
// 	}
// );


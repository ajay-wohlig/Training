const async = require("async") 
async.parallel({
  task1: function(callback) {
    setTimeout(function() {
      console.log('Task One');
      callback(null, 1);
    }, 200);
  },
  task2: function(callback) {
    setTimeout(function() {
      console.log('Task Two');
      callback(null, 2);
    }, 200);
    }
}, function(err, results) {
  console.log(results);
  // results now equals to: { task1: 1, task2: 2 }
});
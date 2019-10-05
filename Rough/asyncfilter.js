const async = require("async");
var order = [];
// //var object = { a: 1, b: 3, c: 2 };
// var iterator = function(num, done) {
//   setTimeout(function() {
//     order.push(num);
//     done(null, num % 2);
//   }, num * 10);
// };

async.filter(
  [1, 3, 2],
  (num, done) => {
    done(null, num > 1);
  },
  (err, res) => {
    callback(null, res);
  }
);

// var newArray = [];
// var obj = Movies.find({}, { title: 1, revenue: 1, _id: 0 });
// var iterator = function(index, cb) {
//   newArray.push(index);
//   // console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<", index.price)
//   cb(null, index.revenue >= 5);
// };
// async.filter(obj, iterator, function(err, res) {
//   // callback(null, res)
//   console.log(res);
//   //console.log(order);
// });

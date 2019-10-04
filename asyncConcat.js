const async = require("async")

async.concat([1, 2, 3], (val, next) => {
  next(null, val % 2 ? val : 0);
}, 

(err, result) => {
  console.log(result); // [1, 3]
});

// async.concat(['Ajay','Umesh','Rohan','Vivek'],(val,next)=>{
//     next(null,val.length <= 4 ? val : " !!!! " )
// },(err,result) =>{
//     console.log(result)
// })

async.concat(['Ajay','Umesh','Rohan','Vivek'],(val,next)=>{
    next(null,val)
},(err,result) =>{
    console.log(result)
})

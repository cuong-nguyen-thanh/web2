var fileHelper = require("./fileHelper");

fileHelper.readFile("./data.txt", function(data){
  console.log(data);
});

//fileHelper.writeFile("./out.txt", data, true);
// fileHelper.writeFile("./out.txt", data);

// var http = require("http");
// var console = require('better-console');
//
// http.createServer(function(request, response){
//     response.end("Hello world!");
// }).listen(8888);
//
// console.log("Server started at 8888");
// console.log("This is a log information");
// console.warn("Warning!");
// console.info("Information");
// console.table([ [1,2], [3,4] ]);
// console.time("Timer");
// console.timeEnd("Timer");
// console.dir({age:12, name:"Cuong"});

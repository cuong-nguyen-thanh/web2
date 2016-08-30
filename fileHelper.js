var readline = require('readline');
var fs = require('fs');
module.exports = {
	readFile : function(filePath, cb) {// cb là 1 function call back và trong
		// đó result là mảng giá trị trả về
		var result = [];

		var lineReader = readline.createInterface({
			input : fs.createReadStream(filePath)
		});

		lineReader.on('line', function(line) {
			result.push(line);
			
		});

		lineReader.on('close', function(line) {
			cb(result);
		});
	},

	writeFile : function(filePath, array, isAppended) {
		if (isAppended) {
			fs.appendFileSync(filePath, array);
			//fs.close();
		} else{
			fs.writeFileSync(filePath, array);
			//fs.close();
		}		
		
	},
	
	
};

// var lineReader = readline.createInterface({
// input : fs.createReadStream("data.txt")
// });
//
// lineReader.on('line', function(line) {
// var arr = line.split(";");
// console.log("Ten: %s, Tuoi: %s, Hon nhan: %s", arr[0], arr[1], arr[2]);
// });
//
// // fs.appendFileSync(file, data)
// // fs.writeFileSync(file, data)

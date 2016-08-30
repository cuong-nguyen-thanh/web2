/**
 * New node file
 */

var fileHelper = require("./fileHelper");

module.exports = {
		output: function(fileIn,fileOut){
			var arr=[];
			var arrMax=[];

			fileHelper.readFile(fileIn, function(data) {

				arr = data;
				var max = parseFloat(data[0].split(";")[2].trim());

				for (var int = 1; int < arr.length; int++) {
					var temp =  parseFloat(data[int].split(";")[2].trim());
					if(temp>=max){
						max = temp;
					}
				}

				for(var i = 0;i<arr.length;i++){
					if(arr[i].split(";")[2]==max){
						arrMax.push(arr[i]);
					}
				}

				fileHelper.writeFile(fileOut, arrMax, false);

			});

		},

}

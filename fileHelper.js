var readline = require('readline');
var fs = require('fs');

module.exports = {
  readFile: function(filePath, cb){
    var result = [];

    var lineReader = readline.createInterface({
      input: fs.createReadStream(filePath)
    });

    lineReader.on('line', function (line) {
      result.push(line);
    });

    lineReader.on('close', function (line) {
      cb(result);
    });
  },

  writeFile: function(filePath, array, isAppended){

  },
}

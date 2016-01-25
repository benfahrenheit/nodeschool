var fs = require('fs');

module.exports = function (dirName, extension, callback) {
    fs.readdir(dirName, function(err, files) {
       if (err) {
           callback(err, null);
       } else {
           var filteredFiles = files.filter(function(value) {
               return value.endsWith('.' + extension);
           });
           
           callback(null, filteredFiles);
       }
    });
}
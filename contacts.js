var fs = require('fs');

exports.read = function(callback){
  fs.readFile('./contacts.json',function(err, data){
    var contacts = JSON.parse(data);

    callback(null, contacts);
  });
}

exports.write = function(contacts, callback) {
  var contactsJSON = JSON.stringify(contacts);
  fs.writeFile('./contacts.json', contactsJSON, function(err){
    callback(err)
  });
}

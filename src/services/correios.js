'use strict'

const Soap = require('soap')



  var url = 'http://example.com/wsdl?wsdl';
  var args = {name: 'value'};
  Soap.createClient(url, function(err, client) {
      // console.log(client)
      // client.MyFunction(args, function(err, result) {
          // console.log(result);
      // });
  });



module.exports = {
    calcPrazos: () => {
    
        return 'asdf'
    
    }
}

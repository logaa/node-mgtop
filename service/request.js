var request = require('request');

const baseDomain = 'http://localhost';

module.exports.get = function(url, callback){
    request(baseDomain + url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            callback(body);
        }else{
            console.error(error);
        }
    })
};

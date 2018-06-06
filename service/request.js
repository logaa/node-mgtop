var request = require('request');

// const baseDomain = 'http://localhost';
const baseDomain = 'http://116.255.159.171:8080/web';

module.exports.get = function(url, callback){
    console.log('URL ---> ' + baseDomain + url);
    request(baseDomain + url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            callback(body);
        }else{
            console.error(error);
        }
    })
};

var express = require('express');
var router = express.Router();
var request = require('../service/request');


router.get('/:size?/:page?', function(req, res, next) {
    let url = '/live/find/10/0';
    if(req.params.size != undefined && req.params.page != undefined) {
        url = '/live/find/' + req.params.size + '/' + req.params.page;
    }
    request.get(url, function(body){
        const bodyJson = JSON.parse(body);
        if(bodyJson.code === 200){
            const data = bodyJson.data;
            let prev = data.page - 1;
            let next = data.page + 1;
            if(prev < 0) prev = 0;
            res.render('live/live', { title: 'Live', nav: 'live', content:  data.content, prev: '/live/10/' + prev, next: '/live/10/' + next});
        }else {
            console.error('ERROR: ' + bodyJson.msg);
            res.render('live/live', { title: 'Live', nav: 'live', content:  [], prev: '/live/10/0', next: '/live/10/1'});
        }
    });
});


module.exports = router;

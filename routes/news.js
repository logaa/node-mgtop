var express = require('express');
var router = express.Router();

var request = require('../service/request');

router.get('/index/:size?/:page?', function(req, res, next) {
    let url = '/news/find/10/0';
    if(req.params.size != undefined && req.params.page != undefined) {
        url = '/news/find/' + req.params.size + '/' + req.params.page;
    }
    request.get(url, function(body){
        const bodyJson = JSON.parse(body);
        if(bodyJson.code === 200){
            const data = bodyJson.data;
            let prev = data.page - 1;
            let next = data.page + 1;
            if(prev < 0) prev = 0;
            res.render('news/news', { title: 'News', nav: 'news', content:  data.content, prev: '/news/index/10/' + prev, next: '/news/index/10/' + next});
        }else {
            console.error('ERROR: ' + bodyJson.msg);
            res.render('news/news', { title: 'News', nav: 'news', content:  [], prev: '/news/index/10/0', next: '/news/index/10/1'});
        }
    });
});

router.get('/find-one/:id', function(req, res, next) {
    request.get('/news/' + req.params.id, function(body){
        const bodyJson = JSON.parse(body);
        if(bodyJson.code === 200){
            const data = bodyJson.data;
            res.render('news/detail', { title: 'News', nav: 'news', content: data.content, title: data.title, date: data.date});
        }else {
            console.error('ERROR: ' + bodyJson.msg);
            res.render('news/detail', { title: 'News', nav: 'news'});
        }
    });
});

module.exports = router;

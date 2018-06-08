var express = require('express');
var router = express.Router();
var request = require('../service/request');

/* GET home page. */
router.get('/', function(req, res, next) {
    let query = req._parsedUrl.query;
    if(query == null) query = '10/0';
    request.get('/love2io/posts/find-all/' + query, function(body){
        const bodyJson = JSON.parse(body);
        if(bodyJson.code === 200){
            const data = bodyJson.data;
            let prev = data.page - 1;
            let next = data.page + 1;
            if(prev < 0) prev = 0;
            res.render('index', { title: 'Books', nav: 'books', content: data.content, prev: '/?10/' + prev, next: '/?10/' + next});
        }else {
            console.error(bodyJson.msg);
            res.render('index', { title: 'Books', nav: 'books', content:  [], prev: '/?10/0', next: '/?10/1'});
        }
    });
});

router.get('/archives', function(req, res, next) {

    request.get('/love2io/archives/2018', function(body){
        const bodyJson = JSON.parse(body);
        if(bodyJson.code === 200){
            const data = bodyJson.data;
            res.render('archives', { title: 'Archives', nav: 'archives', year : data.year, archives: data.archives });
        }else {
            console.error(bodyJson.msg);
            res.render('archives', { title: 'Archives', nav: 'archives' });
        }
    });
});

router.get('/signin', function(req, res, next) {
    res.render('signin', { title: 'Sign in' });
});

// demo
router.get('/get', function(req, res, next) {
    request.get('http://zuhe.imaibo.net:8080/portfolio/api/mobile/portfolios/getPortfolioDetailVip?versionCode=4400&portfolioId=107538', function(body){
        res.json(body);
    });
});


module.exports = router;

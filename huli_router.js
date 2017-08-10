const fs = require('fs');
const express = require('express');
const router = express.Router();
const request = require('request');
const requestSync = require('sync-request');
const oauth = require('./oauth');

module.exports = router;

router.get('/ninegame', (req, res) => {
    const code = req.query.code;
    const state = req.query.state;
    const userInfo = oauth.getUserInfo(code);
    const openid = userInfo.openid;

    res.redirect('https://events.huli.com/static/redpacket/?openid=' + openid);
});

router.get('/test', (req, res) => {
        request({
            url: 'https://m.huli.com/wap/1.4/mycapital/chart',
            method: 'get',
            gzip: true,
            headers: {
                // 'cookie': 'syd_auth=1059946%7C%7C1%7C%7C%7C%7C1'
            }
          }, (err, httpResponse, body) => {   
              res.send(JSON.parse(body));
        });
    
});
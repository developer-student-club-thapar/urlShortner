const express = require('express');
const router = express.Router();
const validUrl = require('valid-url');
const shortid = require('shortid');
const config = require('config');
const Url = require('../models/url-model');
const HttpError = require('../models/http-error');
const fetch = require('node-fetch');
require('dotenv').config();

// route to shorten the link
router.post('/shorten', async (req, res) => {
  const { longUrl } = req.body;
  const { keyword } = req.body;
  const { customurl } = req.body;

  const apifetch = process.env.link;
  if (customurl === '') {
    const fetch_response_all = await fetch(apifetch, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    var link = '';
    var ans;
    const response_json_all = await fetch_response_all.json();
    var data = response_json_all.data;
    for (var i = 0; i < data.length; i++) {
      if (data[i].target === longUrl) {
        link = data[i].link;
        ans = data[i];
        break;
      }
    }
    // console.log(link);
    if (link !== '') {
      res.send(ans);
    } else {
      const fetch_response = await fetch(apifetch, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          target: longUrl,
          domain: 'dsctiet.tech',
        }),
      });
      const response_json = await fetch_response.json();
      res.send(response_json);
    }
  } else {
    const fetch_response = await fetch(apifetch, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        target: longUrl,
        domain: 'dsctiet.tech',
        customurl: customurl,
      }),
    });
    const response_json = await fetch_response.json();
    res.send(response_json);
  }
});

module.exports = router;

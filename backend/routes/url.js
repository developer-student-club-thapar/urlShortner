const express = require("express");
const router = express.Router();
const validUrl = require('valid-url');
const shortid = require('shortid');
const config  = require('config');
const Url = require('../models/url-model');
const HttpError = require("../models/http-error");

// route to shorten the link
router.post('/shorten',async (req, res) => {
const { longUrl } = req.body;
const baseUrl = config.get('baseUrl');

//check base url
if(!validUrl.isUri(baseUrl)) {
    return res.status(401).json('Invalid base url');

}
// Create url code
const urlCode = shortid.generate();

// Check Long Url is valid or not
if(validUrl.isUri(longUrl))
{
    try{
        let url = await Url.findOne({longUrl});

        // if longurl is shortened already, then it will return same shorturl
        if(url)
        {
            res.json(url);
        } else{
            const shortUrl = baseUrl + '/' +urlCode;
            url = new Url({
                longUrl,
                shortUrl,
                urlCode,
                date: new Date()
            });
            await url.save();

            res.json(url);
        }

    } catch (err) {
        const error = new HttpError(
            "Server error found, please try again later.",
            500
        );
        return next(error);
    }
} else{
    res.status(401).json('Invalid long url');
}

});

module.exports = router;

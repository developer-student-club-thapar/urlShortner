const express = require("express");
const router = express.Router();
const HttpError = require("../models/http-error");
const Url = require('../models/url-model');

// redirecting shorturl to longurl
router.get('/:code', async (req, res) =>{
    try{
        const url =await Url.findOne({ urlCode: req.params.code });
        if(url){
            return res.redirect(url.longUrl);
        } else {
            return res.status(404).json('No Url Found');
        }
    } catch (err) {
        const error = new HttpError(
            "Some server error found, please try again later.",
            500
        );
        return next(error);
    }
});

module.exports = router;

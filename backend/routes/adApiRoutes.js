const express = require('express');
const router = express.Router();
const Posts = require('../models/posts-model');
const mongoose = require('mongoose');


// get a particular ad corresponding to ad Id.
router.get('/getAds/id/:id', (req, res) => {
    // respond back with a particular ad with requested ad Id.
    Posts.findById(req.params.id, (err, ad) => {
        if(err){
            console.log(err);
        } else{
            // console.log(ad);
            res.send(ad);
        }
    })
}); 
// get ads of particular category using path params(note: the path param is itself not a part of the url just a parameter attached to the url)
router.get('/getAds/category/:category', (req, res) => {
    // respond back with particular ads in given category
    Posts.find({category: req.params.category}, (err, ads) => {
        if(err){
            console.log("this is category error : ", err);
        } else {
            // console.log(ads);
            res.send(ads);
        }
    });
});

// get all ads from db
router.get('/getAds', (req, res) => {
    // respond back with array of all the posts
    Posts.find({}, (err, allAds) => {
        if(err){
            console.log(err);
        } else {
            // console.log(allAds);
            res.send(allAds);
        }
    })
});
    
// post ad in database
router.post('/postAd', (req, res) => {
    // add into database
    Posts.create(req.body)
    .then(postdata => {
        console.log(postdata);
        res.send(postdata._id);
    })
    .catch(err => {
        console.log("this is the error : ", err);
        res.send({
            Errormessage: err.message
        });
    });
    
});




module.exports = router;



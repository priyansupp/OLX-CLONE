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
router.get('/getAds/category/:category/sort/:sort', (req, res) => {
    // respond back with particular ads in given category

    if(req.params.sort === 'clear') {
        Posts.find({category: req.params.category}, (err, allAds) => {
            if(err){
                console.log(err);
            } else {
                // console.log(allAds);
                res.send(allAds);
            }
        });
    }

    else {
        let sortby = 0;
        if(req.params.sort === 'clear') sortby = 0;
        else if(req.params.sort === 'inc') sortby = 1;
        else sortby = -1;
    
        Posts.find({category: req.params.category}).sort({price: sortby}).exec((err, ads) => {
            if(err){
                console.log("this is category error : ", err);
            } else {
                // console.log(ads);
                res.send(ads);
            }
        });
    }

});

// get all ads from db
router.get('/getAds/sort/:sort', (req, res) => {

    if(req.params.sort === 'clear') {
        Posts.find({}, (err, allAds) => {
            if(err){
                console.log(err);
            } else {
                // console.log(allAds);
                res.send(allAds);
            }
        });
    }

    else {
        let sortby;
        if(req.params.sort === 'inc') sortby = 1;
        else sortby = -1;
        
        Posts.find({}).sort({price: sortby}).exec((err, allAds) => {
            if(err){
                console.log(err);
            } else {
                // console.log(allAds);
                res.send(allAds);
            }
        });

    }
    // respond back with array of all the posts
    
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



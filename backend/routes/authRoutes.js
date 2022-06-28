const express = require('express');
const router = express.Router();
const User = require('../models/user-model');

router.get('/postUser', (req, res) => {
    User.findOne({microsoftId: req.body.microsoftId}).then((currentuser) => {
        if(currentuser) {
            console.log("User is : ", currentuser);
            done(null, currentuser);
        } else {
            User.create({
                microsoftId: profile.id,
                Name: profile.displayName,
                email: profile.emails[0].value,
                roll_no: profile.name.familyName
            }).then(newUser => {
                console.log("New user has been created, ", newUser);
                done(null, newUser);
            })
        }
    });
})

module.exports = router;

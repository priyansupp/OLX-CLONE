const express = require('express');
const router = express.Router();
const passport = require('passport');

// authenticate via microsoft using passport
router.get('/microsoft', passport.authenticate('microsoft'));


// signup manually
router.get('/signup', (req, res) => {
    // submit response to the database of that signup form
})


module.exports = router;

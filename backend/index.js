require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const authRoutes = require('./routes/authRoutes');
const adApiRoutes = require('./routes/adApiRoutes');
const profileRoutes = require('./routes/profileRoutes');
const cors = require('cors');


// set up express app
const app = express();

// set up cors
app.use(cors({
    origin: "http://localhost:3000",            // take request from here which is different that the url from where app is listening to(i.e 4000). By default, get put post delete requests are taken from the url where the app is listening to
    methods: ['GET', 'POST', 'DELETE', 'PATCH', 'PUT'],
    credentials: true           // for taking in cookies also
}))


// connnect to database
mongoose.connect('mongodb://127.0.0.1:27017', () => {
    console.log("Connected to database");
});

// mongo atlas - backend thing, olxclone:
// priyanshu - sbcJc1grisHQjVFn
// yash - KuKew5KGqKLmDD3f
// mongodb+srv://<username>:<password>@cluster0.ir1vrth.mongodb.net/?retryWrites=true&w=majority




// static files


// using a middleware
app.use(bodyParser.json());             // it's gonna parse the json data of incoming request(eg: in case of post req) and attach it to the body of request object.



// fires for every request
app.use((req, res, next) => {
    console.log(req.url, req.method);
    next();
})


// http://localhost:4000/ad-api/getAds/category/mobiles
// get requests
// app.get('/', (req, res) => {
//     res.json({message: 'Welcome to olxclone app'});
// })

app.use('/auth', authRoutes);
app.use('/ad-api', adApiRoutes);
app.use('/profile-api', profileRoutes);




// listen to requests at port 4000
app.listen(process.env.PORT, () => {
    console.log(`Listening to requests on port ${process.env.PORT}`);
})














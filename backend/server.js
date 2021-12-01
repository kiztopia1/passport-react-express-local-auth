const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const passport = require('passport')
const passportLocal = require('passport-local').Strategy;
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const session = require('express-session');
const bodyParse = require('body-parser');

const app = express()
const User = require('./user.js')

//mongoose config 

mongoose.connect('mongodb+srv://kirubel:1234@cluster0.dakub.mongodb.net/test?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    () => {
        console.log('db is connected')
    }
)

// Middleware
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended: true}));
app.use(cors({
    origin: 'http://localhost:3000', // location of the frontend app
    credentials: true
}))

app.use(passport.initialize());
app.use(passport.session());
require('./passportConfig')(passport);

app.use(
    session({
        secret: '234kjh32409k23409342u',
        resave: true,
        saveUninitialized: true
    })
)

app.use(cookieParser('234kjh32409k23409342u'));

// Routes
app.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, user, info)=> {
        if(err) throw err;
        if(!user) res.send('no user Exist');
        else {
            req.logIn(user, err => {
                if(err) throw err;
                res.send('Authenticated');
            })
        }
    })(req,res,next);
});
app.post('/register', (req, res) => {
    console.log(req.body)
    User.findOne({username: req.body.username}, async(err, doc) => {
        console.log(err, doc)
        let hashedPassword = await bcrypt.hash(req.body.password, 10)
        if(err){
            throw err
        }if(doc)res.send('username is taken')
        if(!doc) {
            const newUser = new User({
                username: req.body.username,
                password: hashedPassword
            });
            await newUser.save();
            res.send('user created');
            console.log('create')
        }
    })
    
})
app.get('/user', (req, res) => {
    res.send(req.user);
})

app.listen(4000, () => {
    console.log('server is running')
})
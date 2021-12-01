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

// Middleware
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended: true}));
app.use(cors({
    origin: 'http://localhost:3000', // location of the frontend app
    credentials: true
}))

app.use(
    session({
        secret: '234kjh32409k23409342u',
        resave: true,
        saveUninitialized: true
    })
)

app.use(cookieParser('234kjh32409k23409342u'));


app.listen(4000, () => {
    console.log('Server is running')
})
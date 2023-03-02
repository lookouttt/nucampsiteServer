const passport = require('passport');
const LocalStategy = require('passport-local').Strategy;
const User = require('./models/user');

exports.local = passport.use(new LocalStategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
/**
 * Login page for protected views
 * Optional, see config.login.enabled
 */
var express = require('express'),
    app = module.exports = express(),
    expressLess = require('express-less'),
    config = require('../../lib/config'),
    cookieParser = require('cookie-parser'),
    session = require('express-session'),
    passport = require('passport'),
    SteamStrategy = require('passport-steam').Strategy;

/**
 * Passport setup
 * Serializing full user profile, setting up SteamStrategy
 */
passport.serializeUser(function(user, done) {
    done(null, user);
});
passport.deserializeUser(function(obj, done) {
    done(null, obj);
});

passport.use(new SteamStrategy({
        returnURL: 'http://'+ config.host +':'+ config.port +'/login/auth',
        realm: 'http://'+ config.host +':'+ config.port +'/login/auth',
        apiKey: config.login.steamApiKey
    },
    function(identifier, profile, done) {
        process.nextTick(function() {
            profile.identifier = identifier.substring(identifier.lastIndexOf('/') + 1);
            profile.allowed = (config.login.allowedIds.indexOf(profile.identifier) > -1);
            return done(null, profile);
        })
    }
));

app.use(cookieParser());
app.use(session({secret: config.login.sessionSecret}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/login', expressLess(__dirname + '/public', { compress: true }));
app.set('views', process.cwd() + '/lib/login/');

app.get('/login', function(req, res) {
    res.render('public/login.jade', {user: req.user});
});
app.get('/login/steam',
    passport.authenticate('steam'),
    function(req, res) {
        // Passport will redirect to Steam to login
    }
);
app.get('/login/auth',
    passport.authenticate('steam', { failureRedirect: '/login' }),
    function(req, res) {
        res.redirect('/dashboard');
    }
);


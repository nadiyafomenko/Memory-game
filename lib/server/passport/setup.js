const User = require('../model/User')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

passport.serializeUser((user, done) => done(null, user.id))

passport.deserializeUser((id, done) => 
    User.findById(id, (err, user) => done(err, user))
)

passport.use(
  new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
      User.findOne({ email: email })
          .then(user => {
              if (!user) console.error('no user found')
              else {
                  if(password === user.password) return done(null, user);
                  else return done(null, false, { message: "Wrong password" });
              }
          })
          .catch(err => done(null, false, { message: err }))
      })
);

module.exports = passport
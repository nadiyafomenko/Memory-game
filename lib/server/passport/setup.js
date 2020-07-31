const bcrypt = require('bcryptjs')
const User = require('../model/User')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

passport.serializeUser((user, done) => done(null, user.id))

passport.deserializeUser((id, done) => 
    User.findById(id, (err, user) => done(err, user))
)

// passport.use(new LocalStrategy(
//     function(email, password, done) {
//       User.findOne({ email: email }, function (err, user) {
//         if (err) { return done(err); }
//         if (!user) {
//           return done(null, false, { message: 'Incorrect username.' });
//         }
//         if (!user.validPassword(password)) {
//           return done(null, false, { message: 'Incorrect password.' });
//         }
//         return done(null, user);
//       });
//     }
// ));

passport.use(
  new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
      // Match User
      User.findOne({ email: email })
          .then(user => {
              if (!user) {
                  console.error('no user found')
                  // Return other user
              } else {
                // Match password
                  if(password === user.password) {
                    return done(null, user);
                  } else {
                    return done(null, false, { message: "Wrong password" });
                  }
              }
          });
        })
);

module.exports = passport
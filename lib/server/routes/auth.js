const router = require('express').Router()
const User = require('../model/User.js')
const passport = require('passport')
const bcrypt = require('bcryptjs')

router.post('/register', async (req ,res) => {
    const user  = new User ({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
    try {
        const savedUser = await user.save()
        console.log(savedUser)
        res.redirect('/login')
    } catch(err) {
        res.status(404).send(err)
        console.log("error")
    }
})

router.post('/login', (req, res, next) => {
    passport.authenticate('local', function(err, user, info) {
        if(err) {
            return res.status(400).json({ eroors:err })
        }
        if(!user) {
            res.redirect('/login')
            return res.status(400).json({errors: 'No user found'})
        }
        req.logIn(user, function(err) {
            if(err){
                return res.status(400).json({errors:err})
            }
            else {
                res.redirect('/game')
                return res.status(200).json({success: 'user logged in'})
            }
        })
    })(req,res,next)
})

router.get('/login', (req ,res) => {
    res.render('login')
})

router.get('/register', (req ,res) => {
    res.render('register')
})

router.get('/game', (req ,res) => { 
    res.render('index')
})

module.exports = router
const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)

const passport = require('./passport/setup')
const authRouter = require('./routes/auth')

const app = express()

dotenv.config()

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', 'views')

mongoose
  .connect(process.env.DB_CONNECT, { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true })
  .then(console.info('MongoDB connected'))
  .catch(err => console.error(err))

app.use(
  session({
    secret: 'cat',
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({
      mongooseConnection: mongoose.connection
    })
  })
)

app.use(passport.initialize())
app.use(passport.session())

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(authRouter)

app.listen(process.env.PORT, () => console.info(`Listening server on port ${ process.env.PORT } ... `));
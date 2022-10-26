const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/user.model')
const jwt = require('jsonwebtoken')

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://nisura:nisura2123@cluster0.n2fpl6p.mongodb.net/?retryWrites=true&w=majority', {
}, (err) => {
  if (err) return console.log(err);
  console.log("MongoDB Server listening");
});

const usersRouter = require('./routes/user');  //imports the users router
const booksRouter = require('./routes/books');  //imports the books router
const issuesRouter = require('./routes/issues');  //imports the issues router

app.use('/users', usersRouter); 
app.use('/books', booksRouter);
app.use('/issues', issuesRouter);



app.post('/api/register', async (req, res) => {
  console.log(req.body)
  try {
    const user = await User.create({
      username: req.body.name,
      email: req.body.email,
      password: req.body.password,
      userType:"user"
    })
    res.json({ status: 'ok' })
  } catch (err) {
    res.json({ status: 'error', error: err })
  }
})

app.post('/api/login', async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
      password: req.body.password
      
    })
    
    if (user) {
     // console.log(user[name])
     console.log(user)
      const token = jwt.sign({
        name: user.username,
        email: user.email,
        userType: user.userType
      }, 'mysecret')

      res.json({ status: 'ok', user: token })
    } else {
      res.json({ status: 'error', user: false })
    }
  } catch (err) {
    console.log(err)
    res.json({ status: 'error', error: err })
  }
})
app.get('/api/quote', async (req, res) => {
  const token = req.headers['x-access-token']


  try {
    const decoded = jwt.verify(token, 'mysecret')
    const email = decoded.email
    const user = await User.findOne({ email: email })
    return res.json({ status: 'ok', quote: user.quote })
  }
  catch (err) {
    console.log(err)
    res.json({ status: 'error', error: err })
  }
})
app.post('/api/quote', async (req, res) => {
  const token = req.headers['x-access-token']


  try {
    const decoded = jwt.verify(token, 'mysecret')
    const email = decoded.email
    const user = await User.updateOne({ email: email }, { $set: { quote: req.body.quote } })
    return { status: 'ok', quote: user.quote }
  }
  catch (err) {
    console.log(err)
    res.json({ status: 'error', error: err })
  }
})

app.listen(1337, () => {
  console.log('Server is running on port 1337')
})
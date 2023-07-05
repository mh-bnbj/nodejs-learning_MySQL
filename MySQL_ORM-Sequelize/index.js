const express = require('express')
const router = require('./route/index')
const morgan = require('morgan')
const e = require('express')

const app = express()
const PORT = 3000

// app.set('view engine', 'pug')
app.set('view engine', 'ejs')
app.engine('html', require('ejs').renderFile)

app.use(morgan('dev'))

app.use(express.static('public'))

app.use('/', express.json())
app.use('/', router)

app.use((req, res) => {
    res.status(404).send('Not Found Route!')
})

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`)
})

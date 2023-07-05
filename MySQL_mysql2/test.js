const http = require('http')
var mysql = require('mysql2')
var url = require('url')
var qs = require('querystring')
const { post } = require('jquery')

const port = 5000

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mhBINABAJY1379',
    database: 'mydb',
})

con.connect(function (err) {
    if (err) throw err
    console.log('Connected!')
    sql = 'SELECT * FROM `user` '
    con.query(sql, function (err, result) {
        if (err) throw err
        console.log(result)
    })
})

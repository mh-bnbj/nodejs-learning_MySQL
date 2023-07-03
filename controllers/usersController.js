// var users = [
//     { id: 1, name: 'mohamadhasan', email: 'mohamad@email.com', age: 23 },
//     { id: 2, name: 'reza', email: 'reza@email.com', age: 13 },
//     { id: 3, name: 'mostafa', email: 'mostafa@gmail.com', age: 44 },
//     { id: 4, name: 'ali', email: 'ali@email.com', age: 10 },
//     { id: 5, name: 'mohamad', email: 'mohamad@gmail.com', age: 28 },
//     { id: 6, name: 'hosien', email: 'hosien@email.com', age: 33 },
// ]

var mysql = require('mysql2')
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mhBINABAJY1379',
    database: 'mydb',
})

connection.connect()

const usersGetController = (req, res) => {
    connection.query('SELECT * FROM `user` ', function (error, results) {
        if (error) console.log(error)
        console.log('The users are: ', results)
        res.send(results)
    })
}

const usersPostController = (req, res) => {
    console.log(req.body)
    connection.query(
        'INSERT INTO `mydb`.`user`(`id`,`name`,`email`, `age`) VALUES(' +
            `${parseInt(req.body.id)},"${req.body.name}","${
                req.body.email
            }",${parseInt(req.body.age)}` +
            ');',
        function (error, results) {
            if (error) console.log(error)
            console.log('The users are: ', results)
            res.send(results)
        }
    )
}

module.exports = { usersGetController, usersPostController }

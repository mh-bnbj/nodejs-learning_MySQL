const User = require('../models/User')

const usersGetController = async (req, res) => {
    var users = await User.findAll()
    console.log('users', users.dataValues)
    res.send(users)
}

const usersPostController = async (req, res) => {
    console.log(req.body)

    try {
        await User.create(req.body)
        res.status(200).send('successful')
    } catch (e) {
        console.error(e)
        res.status(400).send('bad request')
    }
}

module.exports = { usersGetController, usersPostController }

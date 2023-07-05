const express = require('express')

const aboutController = require('../controllers/AboutController')
const contactController = require('../controllers/contactController')
const homepageController = require('../controllers/homepageController.js')
const usersPageController = require('../controllers/usersPageController')
const {
    usersGetController,
    usersPostController,
} = require('../controllers/usersController')

const router = express.Router()

router.get('/', homepageController)
router.get('/about', aboutController)
router.get('/contact', contactController)
router.get('/usersPage', usersPageController)
router.get('/users', usersGetController)
router.post('/users', usersPostController)

module.exports = router

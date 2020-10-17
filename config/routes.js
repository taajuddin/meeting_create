const express = require('express')
const router = express.Router() 
const { authenticateUser } = require('../app/middlewares/authentication')
const usersController = require('../app/controllers/usersControllers')
const meetingControllers = require('../app/controllers/meetingControllers')


router.post('/users/register', usersController.register)
router.post('/users/login', usersController.login)
router.get('/users/account', authenticateUser, usersController.account)

router.get('/meeting/list/all',authenticateUser,meetingControllers.list)
router.get('/meeting/list/:id',authenticateUser,meetingControllers.show)
router.post('/meeting/create',authenticateUser,meetingControllers.create)
router.put('/meeting/update/:id',authenticateUser,meetingControllers.update)




module.exports = router
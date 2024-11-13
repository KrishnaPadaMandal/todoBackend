const express = require('express')
const router = express.Router()

const userController = require('../Controller/User')

router.post('/create-user',userController.createUser)
router.get('/user-list',userController.userList)
router.get('/user-details/:id',userController.userDetails)
router.put('/user-updated/:id',userController.userUpdated)
router.delete('/user-delete/:id',userController.userDelete)


module.exports = router
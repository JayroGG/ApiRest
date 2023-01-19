//Requiring express router
const express = require('express')
const router = express.Router()

//Requirin the User controller
const { getUsers, showUser, createUser, updateUser, deleteUser, setUser } = require('../controllers/users.controller')

//Getting all
router.get('/', getUsers)

//Getting one 
router.get('/:id', setUser, showUser)

//Creating one
router.post('/', createUser)

//Updating one
router.patch('/:id', setUser, updateUser)

//Deleting one
router.delete('/:id', setUser, deleteUser)

//Exporting the routes for Users with endpoint methods
module.exports = router
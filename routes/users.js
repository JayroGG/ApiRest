//Requiring express router
const express = require('express')
const { findById } = require('../models/user')
const router = express.Router()
const User = require('../models/user')

//Getting all
router.get('/', async (req, res) => {
    try{
        const users = await User.find()
        res.setHeader('content-type', 'application/json')
        res.setHeader('Sup', 'What')
        res.json(users)
    } catch(error) {
        res.status(500).json({ message: error.message })
    }
})

//Getting one 
router.get('/:id', getUser, (req, res) => {
    res.setHeader('Sup', 'What')
    res.json(res.user)
})

//Creating one
router.post('/', async (req, res) => {
    const user = new User({
        name: req.body.name,
        role: req.body.role
    })
    try {
        const newUser = await user.save()
        res.status(201).json(newUser)
    } catch (error) {
        res.status(400).json({message: error.message})       
    }
})

//Updating one
router.patch('/:id', getUser, async (req, res) => {
    if (req.body.name != null){
        res.user.name =  req.body.name
    }
    if (req.body.role != null){
        res.user.role = req.body.role
    }
    try {
        const updatedUser = await res.user.save()
        res.json(updatedUser)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})

//Deleting one
router.delete('/:id', getUser, async (req, res) => {
    try {
        await res.user.remove() 
        res.json({message: 'Deleted User'})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//Middleware function to get user by id
async function getUser(req, res, next) {
    let user 
    try {
        user =  await User.findById(req.params.id)
        if (user == null){
            return res.status(404).json({message: 'User not found'})
        }
    } catch (error) {
       return res.status(500).json({message: error.message}) 
    }
    res.user = user
    next()
}

module.exports = router
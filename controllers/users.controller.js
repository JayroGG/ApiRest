//Requiring model and functions
const User = require('../models/user')
const { findById } = require('../models/user')

//Methods

//GET
const getUsers = async (req, res) => {
    try{
        const users = await User.find()
        res.setHeader('content-type', 'application/json')
        res.setHeader('Sup', 'What')
        res.json(users)
    } catch(error) {
        res.status(500).json({ message: error.message })
    }
}

//GET
const showUser =  (req, res) => {
    res.setHeader('Sup', 'What')
    res.json(res.user)
}

//POST
const createUser =  async (req, res) => {
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
}

//PUT
const updateUser = async (req, res) => {
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
}

//DELETE
const deleteUser = async (req, res) => {
    try {
        await res.user.remove() 
        res.json({message: 'Deleted User'})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

//Middleware function to get user by id
const setUser = async function setUser(req, res, next) {
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

//Exporting functions
module.exports = {
    getUsers,
    showUser,
    createUser,
    updateUser,
    deleteUser, 
    setUser
}
const User = require('../models/user')
const { findById } = require('../models/user')

export const getUsers = async (req, res) => {
    try{
        const users = await User.find()
        res.setHeader('content-type', 'application/json')
        res.setHeader('Sup', 'What')
        res.json(users)
    } catch(error) {
        res.status(500).json({ message: error.message })
    }
}

export const showUser =  (req, res) => {
    res.setHeader('Sup', 'What')
    res.json(res.user)
}

export const createUser =  async (req, res) => {
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

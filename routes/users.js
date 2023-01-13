//Requiring express router
const express = require('express')
const router = express.Router()

//Getting all
router.get('/', (req, res) => {
    res.setHeader('content-type', 'application/json')
    res.setHeader('Sup', 'What')
    res.send('Hello World')
})

//Getting one 
router.get('/:id', (req, res) => {
    
})

//Creating one
router.post('/', (req, res) => {

})

//Updating one
router.patch('/:id', (req, res) => {

})

//Deleting one
router.delete('/:id', (req, res) => {

})

module.exports = router
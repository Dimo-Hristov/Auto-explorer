const authController = require('express').Router();
const { login, register } = require('../service/userService');

authController.post('/register', async (req, res) => {
    try {
        const token = await register(req.body.email, req.body.username, req.body.password)
        if (!token) {
            throw new Error('Unable to register with this credential!!!')
        }
        res.status(201).json(token)
        res.end()
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})


authController.post('/login', async (req, res) => {
    try {
        const token = await login(req.body.email, req.body.password)
        if (!token) {
            throw new Error('Unable to register with this credential!!!')
        }

        res.status(200).json(token)
        res.end()
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message })
    }
})

authController.get('/user', async (req, res) => {
    try {
        const user = req.user
        res.status(200).json(user)
        res.end()
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message })
    }
})



module.exports = {
    authController
}
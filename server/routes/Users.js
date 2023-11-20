const express = require("express")
const router = express.Router()
const { Users } = require("../models")
const jwt = require('jsonwebtoken')
const bcrypt = require("bcrypt")
const saltRounds = 10


// Register a new user
router.post('/register', async (req, res) => {
    const { username, email, password } = req.body

    if (!username || !email || !password) {
        return res.status(400).json({ error: 'Username, email, and password are required' });
    }

    if (password.length < 8) {
        return res.status(400).json({ error: 'Password must be at least 8 characters long' })
    }

    try {
        const hashedPassword = await bcrypt.hash(password, saltRounds)
        
        const newUser = await Users.create({
            username: username, 
            email: email, 
            password: hashedPassword,
        })
        res.status(201).json({ user: newUser })
    } catch (error) {
        // Handle unique constraint violation (username or email already exists)
        if (error.name === 'SequelizeUniqueConstraintError') {
            return res.status(409).json({ error: 'Username or email is already in use. Please choose a different one.' });
        }
        console.error(error)
        res.status(500).json({ error: 'Internal Server Error' })
    }
})

// Login
router.post('/login', async (req, res) => {
    console.log('Login route hit')
    const { username, password } = req.body 
    try{
        const foundUser = await Users.findOne({
            where: { username },
        })

        if (foundUser) {
            const passwordMatch = await bcrypt.compare(password, foundUser.password)
            if (passwordMatch){
                const token = jwt.sign({ userId: foundUser.id }, 'skey', { expiresIn: '1h' });
                res.json({ message: 'Login successful', token })
            } else {
                res.status(401).json({ error: 'Invalid credentials' })
            }
        }
        else {
            res.status(401).json({ error: 'Invalid credentials' })
        }
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Internal Server Error' })
    }
})

const authenticate = require('../middlewares/authenticate');

router.get('/protected-route', authenticate, (req, res) => {
    // Accessible only if the token is valid
    res.json({ message: 'Access granted' });
});

// Logout
router.post('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).json({ error: 'Internal Server Error' })
        }

        res.clearCookie('connect.sid')
        res.json({ message: 'Logout successful '})
    })
})

module.exports = router
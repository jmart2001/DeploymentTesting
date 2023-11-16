//importing the required dependencies
const express = require('express')
const cors = require('cors')
const mysql = require('mysql2')
const app = express()

// Configure middleware
app.use(express.json());
app.use(cors());

// Database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Carolina',
    database: 'whattocook',
});
  
db.connect((err) => {
    if (err) {
      console.error('Database connection error: ' + err.stack);
      return;
    }
    console.log('Connected to the MySQL database');
});

// ****** Define API routes ******

// Save and Update Dietary Restrictions for a User:
app.put('api/user/:userId/dietary-restrictions', (req, res) => {
    const userId = req.params.userId;
    const { dietaryRestrictions, description } = req.body;

    // Validate the request body
    if (!dietaryRestrictions) {
        return res.status(400).json({ error: 'Dietary restrictions are required.' });
    }

    // Verify if user exists 
    const query = 'SELECT * FROM User WHERE User_id = ?';

    db.query(query, [userId], (error, results) => {
        // if query fails
        if (error) {
            console.log('db query error: ' + error.message);
            return res.status(500).json({ error: 'Internal Server Error'})
        }
        // if User_id not found or doesn't exist
        if (results.length == 0){
            return res.status(404).json({ error: 'User not found.' })
        }
        
        const updateDietQuery = 'UPDATE UserDietaryRestrictions SET Dietary_restrictions = ?, Description = ? WHERE User_id = ?';
        db.query(updateDietQuery, [dietaryRestrictions, description, userId], (updateError, updateResults) => {
            if (updateError) {
                console.error('Database update error: ' + updateError.message);
                return res.status(500).json({ error: 'Failed to update dietary restrictions.' });
            }
            else{
                res.json({ message: 'Dietary restrictions saved/updated successfully.' })
            }
        })
    })
})
    

// Add and Manage Ingredients in the User's Fridge
app.post('api/user/:userId/fridge', (req,res) => {
    const userId = req.params.userId;
    const { ingredientId, quantity } = req.body;
    
})

// Allow users to register for an account
app.post('/api/register', (req, res) => {

});

// Allows registered users to log in
app.post('/api/login', (req, res) => {

});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})
  
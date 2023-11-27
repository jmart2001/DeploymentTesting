const express = require("express")
const cors = require("cors")
const session = require("express-session")
const db = require('./models')
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const port = process.env.PORT || 3001;

app.use(bodyParser.json());

app.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body;
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your-email@gmail.com',
      pass: 'your-email-password',
    },
  });
  const mailOptions = {
    from: {email},
    to: 'systembreakersusc@gmail.com',
    subject: 'New Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };
  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email', error);
    res.status(500).json({ message: 'Error sending email' });
  }
})

app.use(express.json())
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "DELETE"],
    credentials: true
}))

app.use(session({
    key: "userId",
    secret: "subscribe",
    resave: false,
    saveUninitialized: false, 
    cookie: {
        maxAge: 24 * 60 * 60,  // 1 day
        httpOnly: true, //reducing the risk of cross-site scripting (XSS) attacks.
    },
}))

// Routers
const userRouter = require('./routes/Users.js')
app.use('/users', userRouter)
const recipeRouter = require('./routes/Recipe.js')
app.use('/recipe', recipeRouter)

db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log("Server is running")
    })
})

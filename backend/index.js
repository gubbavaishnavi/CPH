const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');
const mongoDB = require('./db');
const User = require('./models/User');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');

const jwtSecret = 'myNameIsCampusPlacementHubWebsite';

mongoDB();

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use('/api', require('./Routes/CreateUser'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const Uschema = new mongoose.Schema({
  username: { type: String },
  password: { type: String },
  securityquestion: { type: String },
});

const UModel = mongoose.model('UModel', Uschema);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.post(
  '/register',
  [
    body('username', 'Username is required').notEmpty(),
    body('password', 'Password should be at least 6 characters long').isLength({ min: 6 }),
  ],
  async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success, errors: errors.array() });
    }

    const { username, password } = req.body;
    try {
      let user = await UModel.findOne({ username });
      if (user) {
        return res.status(400).json({ success, error: 'Username already exists' });
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      user = new UModel({
        username,
        password: hashedPassword,
        securityquestion: req.body.securityquestion,
      });

      await user.save();
      res.json({ success: true });
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server Error');
    }
  }
);

app.post(
  '/loginuser',
  [
    body('email', 'Invalid Email').isEmail(),
    body('password', 'Password cannot be blank').exists(),
  ],
  async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success, errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ success, error: 'Invalid credentials' });
      }

      const pwdCompare = await bcrypt.compare(password, user.password);
      if (!pwdCompare) {
        return res.status(400).json({ success, error: 'Invalid credentials' });
      }

      const data = {
        user: {
          id: user.id,
        },
      };

      const authToken = jwt.sign(data, jwtSecret);
      success = true;
      res.json({ success, authToken });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, error: 'Server Error' });
    }
  }
);

const Anschema = new mongoose.Schema({
  companyName: { type: String },
  companyemail: { type: String },
  description: { type: String },
  companyType: { type: String },
  websiteUrl: { type: String },
});

const NotModel = mongoose.model('NotModel', Anschema);

app.post('/company', async (req, res) => {
  try {
    const newCompany = new NotModel({
      companyName: req.body.companyName,
      companyemail: req.body.companyemail,
      description: req.body.description,
      companyType: req.body.companyType,
      websiteUrl: req.body.websiteUrl,
    });
    await newCompany.save();
    res.json({ success: true });
  } catch (error) {
    console.error('Error saving to database:', error);
    res.status(500).json({ success: false, error: 'Server Error' });
  }
});

app.get('/companyGet', async (req, res) => {
  try {
    const companies = await NotModel.find();
    res.json(companies);
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

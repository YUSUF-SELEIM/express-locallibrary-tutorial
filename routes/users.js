const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// Create a new route in /routes/users.js
// that will display the text "You're so cool"
// at URL /users/cool/.
// Test it by running the server and visiting
// http://localhost:3000/users/cool/ in your browser

router.get('/cool',(req , res) => res.send('You re so cool'))
module.exports = router;

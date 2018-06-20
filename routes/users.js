var express = require('express');
var router = express.Router();
const knex = require('../knex')

/* GET users listing. */
router.post('/:userid', function(req, res, next) {
  console.log('userid>>', req.params.userid);
  console.log('query?>>', req.query);
  res.send('here are some users');
});

// a route that gets all users
router.get('/', (req, res, next) => {
  // route needs to end res.send, res.extended
  // use knex to get all users
  knex('users')
  .then( (data) => {
    console.log('data>', data)
    res.send(data)
  })
})

// a route that gets ONE user
router.get('/:userid', (req, res, next) => {
  // route needs to end res.send, res.extended
  // use knex to get all users
  knex('users')
  .where('id', req.params.userid)
  .then( (data) => {
    console.log('the specific user id>', data)
    res.send(data)
  })
})

module.exports = router;

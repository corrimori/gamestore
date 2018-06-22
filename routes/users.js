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

// READ - a route that gets ONE user
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

//CREATE one users
router.post('/:userid', (req, res, next) => {
  // look for some provided body data
  // req.body
  console.log('req.body', req.body);
  // req.body.name gets me the name
  // create new user in db with knex
  //SQL INSERT
  knex('users')
    .insert({name: req.body.name})
    .returning('*')
    .then ((result) => {
      let insertedRecord = result[0]
      console.log('result', result[0]);
      res.send(insertedRecord);
    })
  //What if no name was provided in the body data
  // conclude the route with res.send
})

//UPDATE one users
router.put('/:userid', (req, res, next) => {
// look up as specific user,
knex('users')
  .where('id', req.params.userid)
  .then ((data) => {
    console.log('the specific user id>', data)
    // res.send(data)
  //if found, update the user records data
    if(data.length) {
      knex('users')
      .update ({
        name: req.body.name
      })
      .where('id', req.params.userid)
      .returning('*')
      .then((updateResult) => {
        console.log('updateResult', updateResult);
        // respond with user object, represents & record from the use
        // conclude the route
        res.send(updateResult[0]);
      })
    }
  })
})

//DELELE a user
router.delete('/:userid', (req, res, next) => {
  knex('users')
  .where('id', req.params.userid)
  .del()
  .then((result) => {
    console.log('result', result)
    throw new Error('error - broke')
    res.send(({'success': result}))
  })
  .catch((err) => {
    console.log('catch error');
    next()
  })
})

// DELETE a user
// router.delete('/:userid', (req, res, next) => {
//   //lookup userid in the DB, if exists, delete it
//   knex('users')
//   .where('id', req.params.userid)
//   .del()
//   .then((result) => {
//   console.log('result', result)
//   throw new Error('ooops I broke')
//   res.send({'Success': result})
//   })
//   .catch((err) => {
//     console.log('My catch')
//     next()
//   })
// })

module.exports = router;

const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

router.get('/', rejectUnauthenticated, (req, res) => {
  console.log('inside test.router');
  

  pool
  .query (`SELECT * FROM "test";`)
  .then ((results) => res.send(results.rows))
  .catch ((error) => {
    console.log('ERROR SELECTING ALL FROM "test"')
    res.sendStatus(500)
  })
});

module.exports = router;
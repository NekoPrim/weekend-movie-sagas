const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:id', (req, res) => {
  // Add query to get all genres
  console.log('in GET genres router req.params', req.params.id);

  // setup SQL for database
  const queryText = `
    SELECT 
      "genres"."name"
    FROM "genres"
    JOIN "movies_genres"
      ON "genres"."id" = "movies_genres"."genre_id"
    JOIN "movies"
      ON "movies"."id" = "movies_genres"."movie_id"
    WHERE "movies"."id" = $1;
  `;

  const queryParams = [ req.params.id ];

  // send command to database
  pool.query(queryText, queryParams)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log('genre GET ERROR', err);
      res.sendStatus(500);
    });
});

module.exports = router;
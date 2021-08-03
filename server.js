const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// CREATES A CONNECTION TO THE BOOKS_DB 
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'Tucker2006',
    database: 'movie_db'
  },
  console.log(`Connected to the movie_db database.`)
);

app.get('/api/movies', (req, res) => {

db.query('SELECT * FROM movies', function (err, results) {
  if (err) {
    res.status(400).json({error : err.message});
    return 
  }
  res.json({
    message: 'Successful!',
    data : results})
});
})

app.post('/api/add-movie', ({body}, res) => {
  db.query(`INSERT INTO movies (movie_name) VALUES (?)`, [body.movie_name], function (err, results) {
    if (err) {
      res.status(400).json({error : err.message});
      return 
    }
    res.json({
      message: 'Successful!',
      data : body})
  });
}
)

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
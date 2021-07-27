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

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/api/movies'))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);

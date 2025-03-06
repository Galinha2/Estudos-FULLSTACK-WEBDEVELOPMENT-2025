import express from "express";
import bodyParser from "body-parser";
import pg from 'pg';

const app = express();
const port = 3000;

const db = new pg.Client({
  user: 'postgres',
  host: 'localhost',
  database: 'world',
  password: '2586',
  port: 5432,
});

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

async function visited() {
  const result = await db.query('SELECT country_code FROM visited_countries');
  let visitedCountries = [];
  result.rows.forEach((country) => {
    visitedCountries.push(country.country_code);
  });
  return visitedCountries;
};

app.get("/", async (req, res) => {
  const checkCountries = await visited();
  res.render('index.ejs', { total: checkCountries.length, countries: checkCountries });
  console.log(checkCountries);
});

app.post('/add', async (req, res) => {
  try {
    const input = req.body.country;
    const result = await db.query('SELECT country_code FROM countries WHERE country_name LIKE $1',
      [`%${input}%`]);
    console.log(result.rows[0].country_code)
 
    await db.query('INSERT INTO visited_countries (country_code) VALUES ($1)',
      [result.rows[0].country_code]);

    res.redirect('/');
    console.log(req.body.country)
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

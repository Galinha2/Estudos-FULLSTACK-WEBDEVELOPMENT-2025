import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "2586",
  port: 5432,
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let currentUserId = 1;

async function allUsers() {
  const user = await db.query('SELECT * FROM users');
  let armazenaUser = [];
  armazenaUser = user.rows;
  return armazenaUser;
};

async function getCurrentUser() {
  const users = await db.query('SELECT * FROM users');
  const user = users.rows;
  return await user.find((user) => user.id == currentUserId);
};

async function checkVisited() {
  const result = await db.query("SELECT country_code FROM visited_countries JOIN users ON users.id = user_id WHERE user_id = $1", [currentUserId]);
  let countries = [];
  result.rows.forEach((country) => {
    countries.push(country.country_code);
  });
  return countries;
}
app.get("/", async (req, res) => {
  let allUser = await allUsers();
  const countries = await checkVisited();
  console.log(countries)
  let users = await getCurrentUser();

  res.render("index.ejs", {
    countries: countries,
    total: countries.length,
    users: allUser,
    color: users.color,
  });
});
app.post("/add", async (req, res) => {
  const currentUsers = await getCurrentUser();
  console.log(currentUsers);
  const input = req.body["country"];
  const user = req.body.user;
  console.log(user)
  try {
    const result = await db.query(
      "SELECT country_code FROM countries WHERE LOWER(country_name) LIKE '%' || $1 || '%';",
      [input.toLowerCase()]);

    const data = result.rows[0];
    const countryCode = data.country_code;
    try {
      await db.query("INSERT INTO visited_countries (country_code, user_id) VALUES ($1, $2)", [countryCode, currentUsers.id]);
      res.redirect(`/`);
    } catch (err) {
      console.log(err);
    }
  } catch (err) {
    console.log(err);
  }
});

app.post("/user", async (req, res) => {
  if (req.body.add === 'new') {
    res.render('new.ejs');
  } else {
    currentUserId = req.body.user;
    res.redirect('/');
  };
});


app.post("/new", async (req, res) => {
  const name = req.body.name;
  const color = req.body.color;

  await db.query('INSERT INTO users (name, color) VALUES ($1, $2)', [name, color]);
  res.redirect('/')
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

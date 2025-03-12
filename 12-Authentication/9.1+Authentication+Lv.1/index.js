import express from "express";
import bodyParser from "body-parser";
import pg from 'pg';
import bcrypt from 'bcrypt';

const app = express();
const port = 3000;
const saltRounds = 14;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const db = new pg.Client({
  user: 'postgres',
  host: 'localhost',
  database: 'authentication',
  password: '2586',
  port: 5432,
});

db.connect();

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {
  const mail = req.body.username;
  const password = req.body.password;
  try {
    const newUser = await db.query('SELECT * FROM users WHERE email = $1', [mail]);

    if (newUser.rows.length > 0) {
      res.send('E-mail already exists!');
    } else {
      const hash = await bcrypt.hash(password, saltRounds);
      await db.query('INSERT INTO users (email, password) VALUES ($1, $2)', [mail, hash]);
      res.render('secrets.ejs');
    };
  } catch { };
});

app.post("/login", async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;

  try {
    const checkResult = await db.query('SELECT password FROM users WHERE email = $1', [email]);
    if (checkResult.rows.length > 0) {
      const user = checkResult.rows[0];
      const dataPassword = user.password;
      console.log(user, password);

      const hash = await bcrypt.compare(password, dataPassword);
      if (hash) {
        res.render('secrets.ejs');
      } else {
          res.send('Password might be wrong!')
        };
    } else {
      res.send('E-mail might be wrong!')
    };
  } catch { };
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

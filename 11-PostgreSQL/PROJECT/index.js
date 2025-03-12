import express from 'express';
import bodyParser from 'body-parser';
import pg from 'pg';

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

const db = new pg.Client({
    user: 'postgres',
    host: 'localhost',
    database: 'permalist',
    password: '2586',
    port: 5432,
});

db.connect();

async function getAllActivities() {
    const result = await db.query('SELECT * FROM items ORDER BY id ASC');
    let activity = [];

    result.rows.forEach((act) => {
        activity.push({ id: act.id, activity: act.activity });
    });

    return activity;
}

app.get('/', async (req, res) => {
    const activity = await getAllActivities();
    console.log(activity)
    res.render('index.ejs', { activity: activity, act: activity });
});

app.post('/add', async (req, res) => {
    const result = req.body;
    db.query('INSERT INTO items (activity) VALUES ($1)', [result.activity]);

    console.log(result.activity);

    res.redirect('/');
});

app.post('/delete/:id', (req, res) => {
    const result = parseInt(req.params.id);
    console.log(result);

    db.query('DELETE FROM items WHERE id = $1', [result]);

    res.redirect('/');
});

app.post('/edit/:id', (req, res) => {
    const result = parseInt(req.params.id);
    const content = req.body;
    console.log(result);
    console.log(content.submit);

    db.query('UPDATE items SET activity = $1 WHERE id = $2', [content.submit, result]);
    res.redirect('/');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});
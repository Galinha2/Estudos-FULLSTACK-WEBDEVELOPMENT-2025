import express from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));
let pass = "";

app.use(bodyParser.urlencoded({extended: true}));

function logger(req, res, next) {
    console.log(req.body);
    pass = req.body.email + req.body.pass;
    next();
};

app.use(logger);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.post('/submit', (req, res) => {
    res.send(`
        <h1>Your Stupid name is</h1>
        <h1>${logpger}</h1>
        `);
});

app.listen(port, () => {
    console.log(`The server is running on port ${port}`);
});
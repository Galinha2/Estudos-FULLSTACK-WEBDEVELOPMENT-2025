import express from "express";
import bodyParser from "body-parser";
import {dirname} from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));
let passw = '';

app.use(bodyParser.urlencoded({extended: true}));

function password(req, res, next) {
    console.log(req.body);
    passw = req.body.pass;
    next();
};

app.use(password);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.post('/submit', (req, res) => {
    if (passw === 'qwerty123') {
        res.sendFile(__dirname + '/public/hidden.html');
    } else {
        res.sendFile(__dirname + '/public/index.html');
    };
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});
import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.post('/submit', (req, res) => {
    const firstName = req.body.fName;
    const lastName = req.body.lName;

    const conta = firstName.length + lastName.length;

    res.render('index.ejs', {user: `Your Name has ${conta} letter!`});
});

app.get('/', (req, res) => {
    res.render('index.ejs', {user: 'Enter your name below!'});
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
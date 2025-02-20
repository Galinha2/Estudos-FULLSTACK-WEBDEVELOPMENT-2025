import express from "express";
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1><p>Olá o meu nome é Henrique Galinha</p>');
});

app.post('/register', (req, res) => {
    res.sendStatus(201);
});

app.put('/user/henrique', (req, res) => {
    res.sendStatus(200);
});
    
    app.patch('/user/henrique', (req, res) => {
    res.sendStatus(200);
});

app.delete('/user/henrique', (req, res) => {
    res.sendStatus(200);
});

app.listen(port, () => {
    console.log(`The SERVER is running on port ${port}`);
});

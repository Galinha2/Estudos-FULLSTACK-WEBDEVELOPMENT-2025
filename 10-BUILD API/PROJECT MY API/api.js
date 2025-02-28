import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 4000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

let api = [
    {
        id: 1,
        title: 'Loren Ipsum Dor',
        content: 'Lorem Ipsum Diren husnmet lorem upsium dorean uthie, politreva yuitnreva jiumni seef.',
        type: 'Lorem',
        time: ''
    },
    {
        id: 2,
        title: 'Lorewn  Dor',
        content: 'Lorsadasem Isadpsum dasdsad Diren hu sasnmet lorem upsium dorean dasd uthie, sa politrsadeva yuitadsan sreva jiumni seef.',
        type: 'Lorem',
        time: ''
    },
];

//Algo aleatorio
app.get('/random', (req, res) => {
    const rand = Math.floor(Math.random() * api.length);
    res.json(api[rand]);
    console.log(api[rand]);
});

//Algo especifico
app.get('/data/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const findID = api.find((api) => api.id === id);
    res.json(findID);
    console.log(findID);
});

//Cria um dado para a api
app.post('/data', (req, res) => {
    const dados = {
        id: api.length + 1,
        title: req.body.title,
        content: req.body.content,
        type: req.body.type,
    };

    api.push(dados);
    res.json(dados);
    console.log(dados);
});

app.get('/new', (req, res) => {
    res.render('post.ejs');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

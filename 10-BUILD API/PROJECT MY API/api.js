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
    {
        id: 3,
        title: 'Lorewn  Lorsadasem',
        content: 'Lorsadasem Isadpsum dasdsad Diren hu sasnmet lorem upsium dorean dasd uthie, sa politrsadeva yuitadsan sreva jiumni seef. Lorsadasem Isadpsum dasdsad Diren hu sasnmet lorem upsium dorean dasd uthie, sa politrsadeva yuitadsan sreva jiumni seef. Lorsadasem Isadpsum dasdsad Diren hu sasnmet lorem upsium dorean dasd uthie, sa politrsadeva yuitadsan sreva jiumni seef.',
        type: 'fsdfsLorem',
        time: ''
    },
    {
        id: 4,
        title: 'Lorsadasem  Dor',
        content: 'Lorsadasem Isadpsum dasdsad Diren hu sasnmet lorem upsium dorean dasd uthie, saLorsadasem Isadpsum dasdsad Diren hu sasnmet lorem upsium dorean dasd uthie, sa politrsadeva yuitadsan sreva jiumni seef. politrsadeva yuitadsan sreva jiumni seef.',
        type: 'Lofsdfsrem',
        time: ''
    },
    {
        id: 5,
        title: ' Dor',
        content: 'LorsadasLorsadasem Isadpsum dasdsad Diren hu sasnmet lorem upsium dorean dasd uthie, sa politrsadeva yuitadsan sreva jiumni seef.em Isadpsum dasdsad Diren hu sasnmet lorem upsium dorean dasd uthie, sa politrsadeva yuitadsan sreva jiumni seef.',
        type: 'Lore34m',
        time: ''
    },
];

//Mostrar toda a data
app.get('/all', (req, res) => {
    res.json(api);
});

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

//POST NEW CONTENT
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

app.patch('/data/:id', (req, res) => {
     const id = parseInt(req.params.id);
     const existingID = api.find((api) => api.id === id);
     const replaceApi = {
        id: id,
        title: req.body.title || existingID.title,
        content: req.body.content || existingID.content,
        type: req.body.type || existingID.type,
     }; 
     const searchindex = api.findIndex((api) => api.id === id);
     api[searchindex] = replaceApi;
     res.json(replaceApi);
});

//Deletes 1 item
app.delete('/data/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const searchindex = api.findIndex((api) => api.id === id);

    if(searchindex > -1) {
        api.splice(searchindex, 1);
        res.sendStatus(200);
    } else {
        res
        .status(404)
        .json({error: `Data with id: ${id} not found. No data were detected!`})
    };
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

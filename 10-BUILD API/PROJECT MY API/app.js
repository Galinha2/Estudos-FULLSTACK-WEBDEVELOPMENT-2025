import express from "express";
import bodyParser from "body-parser";
import axios from 'axios';

const app = express();
const port = 3000;
const api_URL = 'http://localhost:4000'

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('api.ejs');
});

app.get('/search', (req, res) => {
    res.render('get.ejs', {data: ''});
});
//Get algo especifico na web
app.post('/search', async (req, res) => {
    try {
        const response = await axios.get(api_URL + '/data', req.body);
        
        res.render('get.ejs', {data: data});
        console.log(data);
    } catch (error) {
        res.status(500).json({ message: "Error creating post" });
      }
});

app.get('/new', (req, res) => {
    res.render('post.ejs', {data: ''});
});
//POST NEW CONTENT

app.post('/new', async (req, res) => {
    try {
        const response = await axios.post(api_URL + '/data', req.body);
        res.render('post.ejs', {dataValew: 'Data Posted', data: response.data});
        console.log(response.data);
    } catch (error) {
        res.status(500).json({ message: "Error creating post" });
      };
});
app.get('/patch/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const response = await axios.get(api_URL + `/data/${id}`);
    const foundResponse = {
        id: id,
        title: response.data.title,
        content: response.data.content,
        type: response.data.title
    };
    res.render('patch.ejs', {id: foundResponse.id, title: foundResponse.title, content: foundResponse.content, type: foundResponse.type});
    console.log(response)
});
//PATCH NEW CONTENT
app.post('/patch/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id);

        const updatedData = {
            title: req.body.title,
            content: req.body.content,
            type: req.body.type
        };

        const response = await axios.patch(api_URL + `/data/${id}`, updatedData);

        console.log(response.data);
        res.redirect('back')
   
    } catch (error) {
        console.error("Error updating post:", error.message);
        res.status(500).json({ message: "Error updating post" });
    }
});

app.use('/all', async (req, res) => {
    try {
        const response = await axios.get(api_URL + '/all');
        const allData = response.data;

        console.log(allData);

        res.render('all.ejs', { 
            data: allData, 
            dataValue: 'All Data' 
        });
    } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
        res.status(500).send("Erro ao carregar dados");
    }
});

app.get('/delete/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id);

        // Envia o pedido DELETE para a API
        await axios.delete(api_URL + `/data/${id}`);

        // Redireciona para a página principal após a remoção
        res.redirect('back');
    } catch (error) {
        console.error("Erro ao tentar excluir:", error.message);
        res.status(500).json({ error: "Erro ao tentar excluir o dado" });
    };
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

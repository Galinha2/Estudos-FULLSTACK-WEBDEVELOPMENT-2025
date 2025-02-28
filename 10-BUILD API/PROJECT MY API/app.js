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
        const response = await axios.post(api_URL + '/data', req.body);
        
        res.render('get.ejs', {data: data});
        console.log(data);
    } catch (error) {
        res.status(500).json({ message: "Error creating post" });
      }
});

app.get('/new', (req, res) => {
    res.render('post.ejs', {data: ''});
});
app.post('/new', async (req, res) => {
    const response = await axios.post(api_URL + '/data', req.body);
    res.render('post.ejs', {data: response.data});
    console.log(response.data);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

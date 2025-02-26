import express from 'express';
import axios from 'axios';

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get('/', async (req, res) => {
    const response = await axios.get('https://secrets-api.appbrewery.com/random');
    const content = JSON.stringify(response.data.secret);
    const user = JSON.stringify(response.data.username);
    
    const newContent = content.replace(/"/g, (''));
    const newUser = user.replace(/"/g, (''));
    console.log(content)
    
    try {
        res.render('index.ejs', {
            content: newContent,
            username: newUser 
        });
    } catch (error) {
        console.log('Erro 404!');
        res.status(404).send('Erro 404!');
    }
});

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
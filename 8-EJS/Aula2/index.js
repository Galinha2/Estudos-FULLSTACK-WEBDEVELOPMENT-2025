import express from "express";
import ejs from "ejs";

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    const data = {
        seconds: new Date().getSeconds(),
        frutas: ['Banana', 'Maça', 'Laranja'],
        htmlContent: '<em>This is some text in HTML</em>'
    };
    
    res.render('index.ejs', {
        seconds: data.seconds, data: data, htmlContent: data.htmlContent
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});
import express from "express";
import ejs from "ejs";

const app = express();
const port = 3000;

const today = new Date();
const day = today.getDay();

console.log(day);
app.get('/', (req, res) => {
    if (day === 0 || day === 6) {
        res.render('index.ejs', {
            dayType: "weekend", 
            advice: `it's time to rest`
        });
    } else {
        res.render('index.ejs', {
            dayType: "a week day", 
            advice: `it's time to work hard`
        });
    };
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
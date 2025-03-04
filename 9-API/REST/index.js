import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const API_URL = "http://localhost:4000";

//Add your own bearer token from the previous lesson.
const yourBearerToken = "916e5ae7-f6fe-4e84-bd3d-5efd61929096";

// HINTs: Use the axios documentation as well as the video lesson to help you.
// https://axios-http.com/docs/post_example
// Use the Secrets API documentation to figure out what each route expects and how to work with it.
// https://secrets-api.appbrewery.com/

const config = {
  headers: { Authorization: `Bearer ${yourBearerToken}` },
};

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "Waiting for data..." });
});

app.post("/get-secret", async (req, res) => {
  const searchId = req.body.id;
  try {
    const result = await axios.get(API_URL + "/secrets/" + searchId + config);
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});

app.post("/post-secret", async (req, res) => {
  // TODO 2: Use axios to POST the data from req.body to the secrets api servers.
  const response = await axios.post(API_URL + '/post-secret', req.body, config)

  try {
    res.render('index.ejs', {content: JSON.stringify(response.data) })
  } catch (error) {
    console.log('Error 404 appeared');
    res.status(404).send('ERROR 404!');
  };
});

app.post("/put-secret", async (req, res) => {
  const searchId = req.body.id;
  // TODO 3: Use axios to PUT the data from req.body to the secrets api servers.
  const response = await axios.put(API_URL + '/put-secret', req.body, config)

  try {
    res.render('index.ejs', {content: JSON.stringify(response.data) })
  } catch (error) {
    console.log('Error 404 appeared');
    res.status(404).send('ERROR 404!');
  };
});

app.post("/patch-secret", async (req, res) => {
  const searchId = req.body.id;
  // TODO 4: Use axios to PATCH the data from req.body to the secrets api servers.
  const response = await axios.patch(API_URL + '/patch-secret', req.body, config)

  try {
    res.render('index.ejs', {content: JSON.stringify(response.data) })
  } catch (error) {
    console.log('Error 404 appeared');
    res.status(404).send('ERROR 404!');
  };
});

app.post("/delete-secret", async (req, res) => {
  const searchId = req.body.id;
  // TODO 5: Use axios to DELETE the item with searchId from the secrets api servers.
  const response = await axios.delete(API_URL + '/secrets', req.body, config)

  try {
    res.render('index.ejs', {content: JSON.stringify(response.data) })
  } catch (error) {
    console.log('Error 404 appeared');
    res.status(404).send('ERROR 404!');
  };
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

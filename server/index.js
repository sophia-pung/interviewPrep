import express from 'express';
import cors from 'cors';
import { config } from "dotenv";
config();

const app = express();
const PORT = 8080;

app.use(cors());

app.listen(PORT, () => console.log(`Hola! Server is running on port ${PORT}`));

app.get("/zip", (req, res) => {
  let API_KEY = process.env.API_KEY;
    const url = `http://api.openweathermap.org/geo/1.0/zip?zip=94704,US&appid=${API_KEY}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log("ZIP DATA", zipdata)
        res.send({ ...zipdata });
      })
      .catch((err) => {
        console.log(err);
      });
})

app.get("/weather", (req, res) => {
    const zip = req.query.zip;
    console.log("zip", zip);
    let API_KEY = process.env.API_KEY;
    const url = `https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=122.27&lon=37.87&appid=${API_KEY}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log("DATA", data)
        res.send({ ...data });
      })
      .catch((err) => {
        console.log(err);
      });
  });


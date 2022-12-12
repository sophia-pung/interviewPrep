import express from 'express';
import cors from 'cors';
import { config } from "dotenv";
config();

const app = express();
const PORT = 8080;

app.use(cors());

app.listen(PORT, () => console.log(`Hola! Server is running on port ${PORT}`));

app.get("/weather", (req, res) => {
    let API_KEY = process.env.API_KEY;
    const url = `https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=37.87&lon=-122.26&appid=${API_KEY}`;
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


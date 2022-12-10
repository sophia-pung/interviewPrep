import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 8080;

app.use(cors());

app.listen(PORT, () => console.log(`Hola! Server is running on port ${PORT}`));

app.get("/weather", (req, res) => {
    console.log("HERE")
    const city = req.query.cityName;
    const apiKey = process.env.API_KEY;
    const params = new URLSearchParams({
    //adding these things to where params is in URL, orders it how it needs to itself
        q: 'Berkeley',
        lat: '37.8715',
        lon: '-122.27',
        appid: process.env.API_KEY,
        units: "imperial",
      });
    let API_KEY = process.env.API_KEY;
    const url = `https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=44.34&lon=10.99&appid=${API_KEY}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log("RES", res);
        //create an object with key called data, and value called data > can use spread operator res.send(data)
        res.send({ ...data });
      })
      .catch((err) => {
        console.log(err);
      });
  });
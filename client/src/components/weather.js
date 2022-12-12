import { useState } from 'react';

function LoadWeather() {
    const [zip, setZip] = useState("")
    const [averageTemp, setAverageTemp] = useState("")
    // A function to fetch the average "feels like" temperature from Berkeley over the next four days.
    const fetchZip = () => {
      fetch('http://localhost:8080/zip')
      .then((response) => response.json())
      .then((zip) => {
        setZip(zip);
      })}; 

    const fetchWeather = () => {
        fetch(`http://localhost:8080/weather?zip=${zip}`)
        .then((response) => response.json())
        .then((weather) => {
          setAverageTemp(weather);
        });
    const KelvinToFarenheight = (tempInKelvin) => {
      let farenheight = 1.8*(tempInKelvin-273) + 32;
      return farenheight
    }
    console.log(averageTemp)
    let tempInFarenheight = averageTemp.list.map((weather) => {
      console.log(weather.main.feels_like)
      return KelvinToFarenheight(weather.main.feels_like)
    });
    console.log(tempInFarenheight)
    }

    console.log(fetchZip())

    return  (
        <button onClick={fetchWeather}>test</button>
    )
  };

  export default LoadWeather;
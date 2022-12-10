import { useState } from 'react';

function LoadWeather() {
    const [humidity, setHumidity] = useState("")
    // A function to fetch the list of students that will be load anytime that list change
    const fetchWeather = () => {
        fetch('http://localhost:8080/weather')
        .then((response) => response.json())
        .then((weather) => {
          setHumidity(weather);
        });
    console.log("humidity", humidity);
    }
    return  (
        <button onClick={fetchWeather}>test</button>
    )
  };

  export default LoadWeather;
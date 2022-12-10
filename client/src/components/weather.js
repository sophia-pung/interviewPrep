import { useState } from 'react';

function LoadWeather() {
    const [humidity, setHumidity] = useState("")
    // A function to fetch the list of students that will be load anytime that list change
    const fetchWeather = () => {
        fetch('http://localhost:3002/weather')
        .then((response) => response.json())
        .then((weather) => {
          setHumidity(weather);
        });
    }
    return  (
        <button onClick={fetchWeather}>test</button>
    )
  };

  export default LoadWeather;
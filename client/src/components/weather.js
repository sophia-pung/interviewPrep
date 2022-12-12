import { useState } from 'react';

function LoadWeather() {
    const [averageTemp, setAverageTemp] = useState("")
    const fetchWeather = () => {
        fetch(`http://localhost:8080/weather`)
        .then((response) => response.json())
        .then((weather) => {
          setAverageTemp(weather);
          console.log(averageTemp)
        });
    }
    const tempInFarenheight = (averageTemp) => {averageTemp.list.map((weather) => {
      console.log("test")
      return 1.8*(weather.main.feels_like-273) + 32;
    })};
    console.log("AT", tempInFarenheight(averageTemp));
    function checkBelowForty(temp) {
      return temp < 40; 
    };
    const calculatePercentage = (daysUnderForty) => {
      return daysUnderForty/96;
    }

    return  (
      <div>
        <button onClick={fetchWeather}>test</button>
        <p>It will feel like it's below 40 degrees {}% of the time over the next four days. </p>
      </div>
    )
  };

  export default LoadWeather;
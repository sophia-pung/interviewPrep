import { useState } from 'react';

function LoadWeather() {
    const [averageTemp, setAverageTemp] = useState("")
    const fetchWeather = () => {
        fetch(`http://localhost:8080/weather`)
        .then((response) => response.json())
        .then((weather) => {
          console.log("weather", weather)
          setAverageTemp(tempInFarenheight(weather));
        });
    }
    console.log("average temp", averageTemp)
    const tempInFarenheight = (averageTemp) => {
      if (!averageTemp.list) {
        return null;
      }
      if (averageTemp !== undefined) {
      return averageTemp.list.map((weather) => {
      console.log("test")
      return 1.8*(weather.main.feels_like-273) + 32;
    })}};

    function checkBelowForty(temp) {
      return temp < 40; 
    };
    const calculatePercentage = (averageTemp) => {
      let daysUnderForty = averageTemp.filter(checkBelowForty)
      return ((daysUnderForty.length/96)*100).toFixed(2);
    }

    return  (
      <div>
        <button onClick={fetchWeather}>test</button>
        <p>It will feel like it's below 40 degrees {averageTemp ? calculatePercentage(averageTemp) : 0 }% of the time over the next four days. </p>
      </div>
    )
  };

  export default LoadWeather;
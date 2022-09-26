import React, { useState } from "react";
import axios from "axios";
function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=bdfb7b62a0b639c9a75b8fdc5546c4a8`;
  
  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      searchLocation('')  //after a search set empty
    }
  };
  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Enter Location"
          type="text"
        />
      </div>
      <div className="container">
        <div className="top">
          <div classname="location">
            <p>{data.name},{data.sys? <span>{data.sys.country}</span>:null}
           </p>
          </div>
          <div classname="Temp">
            {data.main? <h1>{data.main.temp.toFixed()}°F</h1>:null}
          </div>
          <div className="bold">
            {data.weather? <p className="bold">{data.weather[0].main}</p>:null}
            
          </div>
        </div>


        {data.name!= undefined && 
        
        <div className="bottom">
        <div className="feels">
        <p>Feels like</p>
          <div className="bold">
          {data.main? <p>{data.main.feels_like.toFixed()}°F</p>:null}
          </div>
          
        </div>
        <div className="humidity">
        <p>Humidity</p>
          <div className="bold">
          {data.main? <p>{data.main.humidity}%</p>:null}
          </div>
          
        </div>
        <div className="wind">
        <p>Wind Speed</p>
          <div className="bold">
          {data.wind? <p>{data.wind.speed.toFixed()}MPH</p>:null}
          </div>
    
        </div>
        <div className="maxtemp">
        <p>Max Temp</p>
          <div className="bold">
          {data.main? <p>{data.main.temp_max}</p>:null}
          </div>
    
        </div>

        <div className="mintemp">
        <p>Min Temp</p>
          <div className="bold">
          {data.main? <p>{data.main.temp_min}</p>:null}
          </div>
    
        </div>
      </div>
        }
        


      </div>
      
    </div>
  );
}

export default App;

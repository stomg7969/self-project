import React, {useState, useEffect} from 'react';

import '../App.css';
import './landing.scss';

const WEATHER = process.env.REACT_APP_WEATHER;
const NYCID = process.env.REACT_APP_NYCID;
const URL = 'http://dataservice.accuweather.com/forecasts/v1/daily/1day';

const Landing = () => {
  const [weather, setWeather] = useState({});
  
  // useEffect, fetch user info using the localStorage.
  // fetching name, email, todo.
  // fetching subway and weather
  // random background generator.
  useEffect(() => {
    console.log('fetching weather info');
    fetch(`${URL}/${NYCID}?apikey=${WEATHER}`)
    .then(r => r.json())
    .then(weather => setWeather(weather))
    .catch(err => alert(err));
  }, []);
// PUSH TO GITHUB!!!!!!!!!!!!!!!!!!!!

  return (
    <div>
      <header>
        <h2>header - weather API</h2>
        <h4>{weather.Headline ? weather.Headline.Text : 'loading...'}</h4>
      </header>
      <div>
        <h2>Hello, fetchedName.</h2>
        <div>
          <h4>subway API</h4>
        </div>
      </div>
      <div>
        <footer>footer - 1.setting 2. contact me 3. copyright?</footer>
      </div>
    </div>
  );
};
export default Landing;
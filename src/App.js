import React, { useState } from 'react';
import './App.css';

import Location from './components/Location';
import SearchBox from './components/SearchBox';
import Weather from './components/Weather';

function App() {
  const [weather, setWeather] = useState({});
  const [appClass, setAppClass] = useState('app');

  const handleSearch = result => {
    setWeather(result);
    setAppClass('app');
    if (result.main) {
      if (result.main.temp < 5) {
        setAppClass('app very-cold');
      } else if (result.main.temp > 15) {
        setAppClass('app warm');
      }
    }
  }

  return (
    <div className={appClass}>
      <main>
        <SearchBox onSearch={handleSearch} />
        {
          weather.main &&
            <div className="information">
            { (weather.name && weather.sys && weather.sys.country) && <Location country={weather.sys.country} name={weather.name} /> }
            { (weather.weather && weather.weather[0] && weather.weather[0].description && weather.main && weather.main.temp) && <Weather temp={weather.main.temp} main={weather.weather[0].description} /> }
          </div>
        }
      </main>
    </div>
  );
}

export default App;

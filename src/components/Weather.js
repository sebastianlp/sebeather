import React from 'react';
import './Weather.css';

export default function Weather(props) {
  const { main } = props;
  const conditions = main.charAt(0).toUpperCase() + main.slice(1);
  return (
    <div className="weather-box">
      <div className="temp">{Math.round(props.temp)}° C</div>
      <div className="weather">{conditions}</div>
    </div>
  );
}
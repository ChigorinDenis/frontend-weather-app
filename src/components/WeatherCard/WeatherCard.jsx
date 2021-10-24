import React from 'react';
import './WeatherCard.scss';
import { useSelector } from 'react-redux';
import { parseFileName } from '../../utils/utils.js';

export default (props) => {
  const { params } = props;
  const {
    min_temp,
    max_temp,
    formatted_date,
    word_date,
    weather_state_name,
  } = params;
  const { measurement } = useSelector((state) => state.ui);
  const weatherNameIcon = parseFileName(weather_state_name);
  return (
    <div className="weather-card">
      <span className="weather-card__title">
        { word_date || formatted_date}
      </span>
      <img 
        src={`./img/${weatherNameIcon}.png`}
        alt={weatherNameIcon}
        className="weather-card__icon"
      />
      <div className="weather-card__range">
        <span className="weather-card__range__lower">{min_temp}&deg;{measurement}</span>
        <span className="weather-card__range__upper">{max_temp}&deg;{measurement}</span>
      </div>
    </div>
  )
}
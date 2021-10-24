import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import routes from '../../routes.js';
import { addWeather } from '../../reducers/weatherReducer.js';
import { sidebarClose } from '../../reducers/uiReducer.js';

import './Main.scss';
import WindDirection from '../WindDirection/WindDirection.jsx'
import HighlightCard from '../HighlightCard/HighlightCard.jsx';
import MeasurementUnit from '../MeasurementUnit/MeasurementUnit.jsx';
import WeatherCard from '../WeatherCard/WeatherCard.jsx';
import CurrentWeather from '../CurrentWeather/CurrentWeather.jsx';
import ProgressBar from '../ProgressBar/ProgressBar.jsx';
import Sidebar from '../Sidebar/Sidebar.jsx';

function Main () {
  const weather = useSelector((state) => state.weather);
  const ui = useSelector((state) => state.ui);
  const [currentWeather, ...nextDaysWeather] = weather.displayedWeather;
  return (
    <main className="main container">
      <div className="current">
        <CurrentWeather current={currentWeather} />
        <Sidebar />
      </div>
      <div className="next">
        <div className="current-container">
          <MeasurementUnit />
          <div className="weather-card-container">
            {
              nextDaysWeather.map((item) => (
                <WeatherCard 
                  key={item.id}
                  params={item}
                />
              ))
            }
          </div>
          <section className='hightlights'>
            <h2>Today’s Hightlights</h2>
            <div className='inner-container'>
              <HighlightCard
                title="Wind status"
                value={currentWeather?.wind_speed.toFixed(1)}
                unit="mph"
              >
                <WindDirection
                  direction={currentWeather?.wind_direction}
                  compass={currentWeather?.wind_direction_compass}
                />
              </HighlightCard>
              <HighlightCard
                title="Humidity"
                value={currentWeather?.humidity}
                unit="%"
              >
                <ProgressBar progress={currentWeather?.humidity}/>
              </HighlightCard>
              <HighlightCard
                title="Visibility"
                value={Math.trunc(Number(currentWeather?.visibility || 0))}
                unit="miles"
              />
              <HighlightCard
                title="Air pressure"
                value={currentWeather?.air_pressure}
                unit="mb"
              />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export default Main;
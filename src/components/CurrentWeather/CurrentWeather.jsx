import React from 'react';
import { useDispatch } from 'react-redux';
import './CurrentWeather.scss';
import { MyLocation, LocationOn} from '@material-ui/icons';
import { useSelector } from 'react-redux';
import { parseFileName } from '../../utils/utils.js';
import { sidebarOpen } from '../../reducers/uiReducer.js';


function CurrentWeather(props) {
  const location = useSelector((state) => state.location);
  const { measurement } = useSelector((state) => state.ui);
  const { current } = props || {};
  const weatherNameIcon = parseFileName(current?.weather_state_name || 'sun');
  const { title } = location;
  const dispatch = useDispatch();
  return (
    <aside className="current-weather">
      <div className='current-weather__sticky-contaier'>
      <div className="current-weather__search">
        <div 
          className="current-weather__search__btn"
          onClick={() => dispatch(sidebarOpen())}
        >
          Search for places
        </div>
        <div className="current-weather__search__circle">
          <MyLocation className='current-weather__search__location'/>
        </div>
      </div>
   
      <div className="current-weather__icon">
        <img src={`./img/${weatherNameIcon}.png`} alt="shower" />
      </div>
      <div className="current-weather__index">
        <span className="current-weather__index__value">
          {current?.min_temp}
        </span>
        <span className="current-weather__index__unit">&deg;{measurement}</span>
      </div>
      <div className="current-weather__status">
        <span>{current?.weather_state_name}</span>
      </div>
      <div className="current-weather__info">
        <div className="current-weather__info__date">
          <span>{current?.word_date}</span>
          <span>&#183;</span>
          <span>{current?.formatted_date.split('.')[0]}</span>
        </div>
        <div className="current-weather__info__local">
          <span>
            <LocationOn />
            &ensp;
            {title}
          </span>
        </div>
      </div>
      </div>
    </aside>
  );
}

export default CurrentWeather;
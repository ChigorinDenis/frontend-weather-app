import React, { useEffect, useState }  from 'react';
import { useDispatch, useSelector} from 'react-redux';
import routes from './routes.js';
import axios from 'axios';
import Cookies from 'js-cookie';
import Main from './components/Main/Main';
import { fetchWeather } from './utils/fetchData.js';
import { addLocation } from './reducers/locationReducer.js';
import { addWeather } from './reducers/weatherReducer.js';
import Preloader from './components/Preloader/Preloader.jsx';

function getPosition() {
  return new Promise((resolve, reject) => 
      navigator.geolocation.getCurrentPosition(resolve, reject)
  );
}

export default () => {
  const [loading, setLoading] = useState(false);
  const dispath = useDispatch();
  const { measurement } = useSelector((state) => state.ui);
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!Cookies.get('latitude')) {
          const { coords } = await getPosition();
          Cookies.set('latitude', coords.latitude);
          Cookies.set('longitude', coords.longitude);
        }
        setLoading(true);
        const latitude = Cookies.get('latitude');
        const longitude = Cookies.get('longitude');
        const locationRoute = routes['location'];
        const locationURL = locationRoute(latitude, longitude);
        const locationResponse = await axios.get(locationURL);
        
        const location = locationResponse.data[0];
        const weather = await fetchWeather(location.woeid);
        dispath(addLocation(location));
        dispath(addWeather({ weather, measurement}));
        setLoading(false);
        
      } catch(err) {
        setLoading(false);
        return err.message;
      }
    }
    fetchData();
  }, []);
  return (
    <>
      { loading? <Preloader type='global' size='big' /> : <Main />}
    </>
  )
}
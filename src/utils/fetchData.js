import axios from 'axios';
import routes from '../routes.js';

function buildFormatDate(str) {
  const date = new Date(str);
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${days[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]}`;
}

function changeDateFormat(item, index) {
  const { applicable_date, max_temp, min_temp } = item;
  const temps = {
    max_temp: Math.trunc(Number(max_temp)),
    min_temp: Math.trunc(Number(min_temp)),
  };
  const formatted_date = buildFormatDate(applicable_date);
  if (index === 0) {
    return {
      ...item,
      ...temps,
      formatted_date,
      word_date: 'Today',
    }
  }
  if (index === 1) {
    return {
      ...item,
      ...temps,
      formatted_date,
      word_date: 'Tomorrow',
    }
  }
  return {
    ...item,
    ...temps,
    formatted_date,
    word_date: null,
  }
}

export const fetchWeather = async (woeid) => {
  const weatherRoute = routes['weather'];
  try {
    const weatherURL = weatherRoute(woeid);
    const weatherResponse = await axios.get(weatherURL);
    const { consolidated_weather } = weatherResponse.data;
    const weather = consolidated_weather.map(changeDateFormat);
    return weather;
  } catch (e) {
    console.log(e.message);
  }
}

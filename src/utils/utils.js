const  celsiusToFahrenheit = (cels) => (((cels * 9 / 5) + 32).toFixed(0));

export const exchangeWeatherTemp = (weather, measurement) => {
  switch (measurement) {
    case 'C': {
      return weather;
    }
    case 'F': {
      return weather
        .map((item) => {
          const { max_temp, min_temp } = item;
          return {
            ...item,
            max_temp: celsiusToFahrenheit(max_temp),
            min_temp: celsiusToFahrenheit(min_temp),
          }
        })
    }
  }
};

export const parseFileName = (str = '') => (
  str
    .split(' ')
    .map((word) => (`${word[0].toUpperCase()}${word.slice(1)}`))
    .join('')
);


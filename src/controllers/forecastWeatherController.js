const axios = require('axios');
require('dotenv').config();

const fetchForecastWeather = (location) => {
    const apiKey = ''
    return axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${apiKey}`)
      .then(response => response.data)
      .catch(error => {
        console.error(error);
        throw new Error('Failed to fetch weather forecast data');
      });
  };

module.exports = {
    fetchForecastWeather,
};  
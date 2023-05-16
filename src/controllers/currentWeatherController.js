const axios = require('axios');
require('dotenv').config();


const fetchCurrentWeather = (location) => {
    const apiKey = '';
  
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`)
      .then(response => response.data)
      .catch(error => {
        console.error(error);
        throw new Error('Failed to fetch current weather data');
      });
  };

module.exports = {
    fetchCurrentWeather,
};
  
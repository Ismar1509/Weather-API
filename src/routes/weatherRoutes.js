const express = require('express');
const router = express.Router();
const weatherController = require('../controllers/historyWeatherController');
const currentWeatherController = require('../controllers/currentWeatherController');
const forecastWeatherController = require('../controllers/forecastWeatherController');
const historyWeatherController = require('../controllers/historyWeatherController');

router.get('/current', (req, res) => {
  const { location } = req.query;

    currentWeatherController.fetchCurrentWeather(location)
    .then(weatherData => res.json(weatherData))
    .catch(error => res.status(500).json({ error: error.message }));
});

router.get('/forecast', (req, res) => {
  const { location } = req.query;

  forecastWeatherController.fetchForecastWeather(location)
    .then(forecastData => res.json(forecastData))
    .catch(error => res.status(500).json({ error: error.message }));
});

app.get('/history', (req, res) => {
    // Access query parameters
    const { location, startDate, endDate } = req.query;
  
    // Call the historyWeatherController function with the necessary parameters
    historyWeatherController.fetchWeatherHistory(location, startDate, endDate)
      .then(historyData => res.json(historyData))
      .catch(error => res.status(500).json({ error: error.message }));
  });

module.exports = router;

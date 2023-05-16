const axios = require('axios');
require('dotenv').config();

const fetchWeatherHistory = async (req, res) => {
  const apiKey = ''
  const city = req.query.city; // Use req.query.city to access the city parameter from the query string

  // URL for fetching city coordinates from OpenWeatherMap
  const geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`;
  let geoData;

  // Fetch data from OpenWeatherMap for city coordinates
  try {
    const response = await axios.get(geoUrl);
    geoData = response.data;
  } catch (error) {
    return res.status(500).json({ error: "Something went wrong." });
  }

  if (geoData.length === 0) {
    return res.status(400).json({ error: "City not found." });
  }

  // Latitude and longitude of the city
  const lat = geoData[0].lat;
  const lon = geoData[0].lon;

  const nowUnixTime = Math.floor(Date.now() / 1000);
  const fiveDaysAgoUnixTime = nowUnixTime - (5 * 24 * 60 * 60); // Convert 5 days ago date and time to Unix timestamp

  // URL for fetching 5-day history data from OpenWeatherMap
  const url = `https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${fiveDaysAgoUnixTime}&appid=${apiKey}&units=metric`;
  let data;

  // Fetch data from OpenWeatherMap for historical weather
  try {
    const response = await axios.get(url);
    data = response.data;
  } catch (error) {
    return res.status(500).json({ error: "Something went wrong." });
  }

  res.json(data);
};

module.exports = {
  fetchWeatherHistory,
};

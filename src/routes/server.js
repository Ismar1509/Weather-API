const express = require('express');
const weatherRoutes = require('./weatherRoutes');

const app = express();
const port = 5000;

// Middleware
app.use(express.json());

// Routes
app.use('/weather', weatherRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal server error' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

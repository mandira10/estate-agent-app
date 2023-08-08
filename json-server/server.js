const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const data = require('./data.json'); // Your JSON file

app.get('/api/data', (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

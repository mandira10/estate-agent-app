const express = require('express');
const app = express();
var cors = require('cors')
const port = process.env.PORT || 4000;

app.use(cors())

const data = require('../db.json');

app.get('/api/data', (req, res) => {
  res.json(data);
});

app.use('/api/data/:id', function (req, res, next) {
  res.json(data.locations.find((location) => `${location.id}` === req.params.id))
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

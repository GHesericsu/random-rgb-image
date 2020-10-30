const express = require('express');
const path = require('path');

const app = express();

const port = process.env.PORT || 3003;
const publicPath = path.join(__dirname, '../client/dist');
app.use(express.json());
app.use('/', express.static(publicPath));

app.get('/api', (req, res) => {
  res.send('GET success');
});

app.listen(port, () => {
  console.log(`connected on ${port}`);
});

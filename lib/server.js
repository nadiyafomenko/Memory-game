const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', {
    answer: 42
  });
});

app.listen(PORT, () => {
  console.info(`Listening server on port ${ PORT } ... `);
});

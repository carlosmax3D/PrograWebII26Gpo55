const express = require('express'); 
const app = express(); 
const port = process.env.PORT;
const usersRoute = require('./usersRoute');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const uri = 'mongodb://localhost:27017/test';
app.use(bodyParser.json());
app.use('/static', express.static('public'));
app.use('/api/users', usersRoute);
app.get(/.*test-gato*$/, function(req, res) {
  res.send('<h1>Entraste usando el patron test!</h1>');
});
app.get('/api', (req, res) => {
  res.send('Hello World!')
})
app.get('/', (req, res) => {
/// REDIRIGE AL FRONT
})
mongoose.connect(uri)
  .then(() => {
    console.log('Connection success');
    app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    });
  })
  .catch(error => {
    console.error('Connection fail', error);
  });

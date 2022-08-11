const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
var cors = require('cors')
const { db } = require('./index.js');
const { Thought } = require('../database/schema.js')

app.set('trust proxy', true)
app.use(cors())
app.use(express.json());

app.get('/thoughts', async (req, res) => {
  var ip = req.headers['x-real-ip'] || req.connection.remoteAddress;
  Thought.find()
  .then((response) => {
    res.send(JSON.stringify(response))
  })
})

app.post('/thoughts', (req, res) => {
  Thought.create({ text: req.body.text, name: req.body.name  }, function (err, small) {
    if (err) return handleError(err);
  });
  res.sendStatus(200);
})

app.delete('/thoughts', async (req, res) => {
  Thought.deleteOne({_id: req.body.id})
  .then((response) => {
    res.send(JSON.stringify(response))
  })
})

app.put('/thoughts', async (req, res) => {
  Thought.findOneAndUpdate({_id: req.body.id}, {text: req.body.text})
  .then((response) => {
    res.send(JSON.stringify(response))
  })
})

app.listen(port, () => {
  console.log(`Let It Go is listening on port ${port}`)
})
const mongoose = require('mongoose');
const { db } = require('./index.js');

//Define a schema
const Schema = mongoose.Schema;

const thoughtSchema = new Schema({
  name: String,
  text: String,
  date: Date
});

const Thought = db.model('Thought', thoughtSchema)

// Thought.create({username: 'Juan', text:'Ugh...', date: (Date.now())}, function (err) {
//   if (err) return handleError(err);
// });

module.exports = {
  Thought: Thought
}
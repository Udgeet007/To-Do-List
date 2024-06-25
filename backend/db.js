const mongoose = require('mongoose')


mongoose.connect("mongodb+srv://udgeetbhatt271:543255@cluster9.dar8p9x.mongodb.net/")
const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
  todo
}
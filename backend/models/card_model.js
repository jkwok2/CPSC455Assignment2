const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
    url: String,
    name: String,
    cuteness: Number,
  });

  module.exports = cardSchema;
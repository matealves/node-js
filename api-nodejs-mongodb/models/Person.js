const mongoose = require("mongoose");

const Person = mongoose.model("Person", {
  name: String,
  salary: Number,
  admin: Boolean,
});

module.exports = Person;

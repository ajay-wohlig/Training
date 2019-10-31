"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var StudentSchema = new Schema({
  name: {
    type: String,
    Required: "Please enter"
  },

  email: {
    type: String,
    Required: "Please enter"
  },
  Created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Students", StudentSchema);

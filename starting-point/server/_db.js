'use strict';

var Sequelize = require('sequelize');
var potatoes = require('./config/potatoes.json');

var databaseURI = potatoes.vitamin;

var db = new Sequelize(databaseURI, {
  define: {
    timestamps: false,
    underscored: true
  }
});

module.exports = db;

"use strict";

var Handlebars = require("hbsfy/runtime");
var entryTemplate = require('../templates/article/article.hbs');
var entryData = require('../templates/article/article-data.js');

// Register a partial
Handlebars.registerPartial("tagLine", require('../templates/partials/tagline.hbs'));

// Create a custome helper that we can call inside an expression in
// our markup
Handlebars.registerHelper("inc", function(value) {
  return parseInt(value) + 1;
});

// attach our rendered HTML to the DOM
$("#entryOutput").append(entryTemplate(entryData));

var solarSystemData = {
  planets: [
    {
      type: "rocky",
      name: "Mercury"
    },
    {
      type: "rocky",
      name: "Venus"
    },
    {
      type: "rocky",
      name: "Earth"
    },
    {
      type: "rocky",
      name: "Mars"
    },
    {
      type: "gas giant",
      name: "Jupiter"
    },
    {
      type: "gas giant",
      name: "Saturn"
    },
    {
      type: "ice giant",
      name: "Uranus"
    },
    {
      type: "ice giant",
      name: "Neptune"
    }
  ]
};

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

var solarTemplate = require('../templates/article/solar.hbs');
var solarSystemData = require('../templates/article/solar-data.js');

$("#solarOutput").append(solarTemplate(solarSystemData));

function ShowPlanets() {
    $("#planets").toggleClass("hidden");
}

$("#displayPlanets").click(ShowPlanets);



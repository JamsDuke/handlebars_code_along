"use strict";

var entryData = {
  title: "My New Post",
  body: "This is my first post. Hooray!",
  tags: [
    {
      category: "technology",
      name: "handlebars"
    },
    {
      category: "butter churning",
      name: "handlebars stuff"
    }
  ]
};

var taglineData = {
  author_first_name: "Bubba",
  author_last_name: "Vanderwheat",
  authored_date: "January 29, 2017"
};

// Register a partial
var taglineHTML = $("#tagline-partial").html();
var taglineTemplate = Handlebars.compile(taglineHTML);
var taglineOutput = taglineTemplate(taglineData);
Handlebars.registerPartial("tagline", taglineOutput);

// Create a custom helper that we can call inside an expression in our markup
Handlebars.registerHelper("inc", function(value) {
  return parseInt(value) + 1;
});

// Get the template
var entryHTML = $("#entry-template").html();

// Use handlebars to compile it into a template
var entryTemplate = Handlebars.compile(entryHTML);

// Render the resulting HTML by passing the data to the template
var entryOutput = entryTemplate(entryData);

// Attach our rendered HTML to the DOM
$("#entryOutput").append(entryOutput);


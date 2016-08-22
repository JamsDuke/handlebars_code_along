"use strict"

var entryData = {
  title: "My New Post",
  body: "This is my first post. Hooray!",
}

// Get the partial
var entryHTML = $("#entry-template").html();

// Use handlebars to compile it into a template
var entryTemplate = Handlebars.compile(entryHTML);

// Render the resulting HTML by passing the data to the template
var entryOutput = entryTemplate(entryData);

// Attach our rendered HTML to the DOM
$("#entryOutput").append(entryOutput);
var entryData = {
  title: "My New Post",
  body: "This is my first post. Yee!",
  tags: [
    {
      category: "technology",
      name: "handlebars"
    },
    {
      category: "butter churning",
      name: "handlebars stuff"
    }
  ],
  // move taglineData into the main tmplate's context and then
  // the precompiled partial can access it
  taglineData: {
    author_first_name: "Bubba",
    author_last_name: "Vanderwheat",
    authored_date: "January 29, 2017"
  }
};

module.exports = entryData;
var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/home.html"));
  });

  app.get("/apiGiphy", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/apiGiphy.html"));
  });

  app.get("/contact", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/contact.html"));
  });

  app.get("/crystals", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/crystals.html"));
  });

  app.get("/escapeProject", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/escapeProject.html"));
  });

  app.get("/hangman", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/hangman.html"));
  });

  app.get("/psychic", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/psychic.html"));
  });

  app.get("/trivia", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/trivia.html"));
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};

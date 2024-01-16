var Todos = require("../models/todoModul");

module.exports = function (app) {
  app.get("/api/setupTodos", async (req, res) => {
    //seed database
    var starterTodos = [
      {
        username: "frozen",
        todo: "Buy milk",
        isDone: false,
        hasAttachment: false,
      },
      {
        username: "frozen",
        todo: "Feed dog",
        isDone: false,
        hasAttachment: false,
      },
    ];
    const results = await Todos.create(starterTodos);
    res.send(results);
  });
};

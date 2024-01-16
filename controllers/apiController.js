var Todos = require("../models/todoModul");
var bodyParser = require("body-parser");

module.exports = function (app) {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.get("/api/todos/:uname", async (req, res) => {
    try {
      const todos = await Todos.find({ username: req.params.uname });
      res.send(todos);
    } catch (err) {
      console.log(err);
    }
  });

  app.get("/api/todo/:id", async (req, res) => {
    try {
      const todo = await Todos.findById({ _id: req.params.id });
      res.send(todo);
    } catch (err) {
      console.log("it is not");
    }
  });

  app.post("/api/todo", async (req, res) => {
    if (req.body.id) {
      try {
        let upTodo = await Todos.findByIdAndUpdate(
          req.body.id,
          { todo: req.body.todo },
          { isDone: req.body.isDone },
          { hasAttachment: req.body.hasAttachment },
          { new: true }
        );
        res.send(upTodo);
      } catch (error) {
        console.log(error);
      }
    } else {
      var newTodo = Todos({
        username: "frozen_a_i",
        todo: req.body.todo,
        isDone: req.body.isDone,
        hasAttachment: req.body.hasAttachment,
      });
      newTodo
        .save()
        .then(() => {
          res.send("success");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });

  app.delete("/api/todo", async (req, res) => {
    Todos.findByIdAndRemove(req.body.id, function (err) {
      if (err) throw err;
      res.send("Success");
    });
  });
};

var bodyParser = require("body-parser");

var data = [
    { item: "study" },
    { item: "go to the gym" },
    { item: "take a nap" },
    { item: "have shower" },
];

var urlecodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function (app) {
    app.get("/todo", function (req, res) {
        res.render("todo", { todos: data });
    });

    app.post("/todo", urlecodedParser, function (req, res) {
        data.push(req.body);
        res.json(data);
    });

    app.delete("/todo/:item", function (req, res) {
        data = data.filter(function (todo) {
            return todo.item.replace(/ /g, "-") !== req.params.item;
        });
        res.json(data);
    });
};

const { Router } = require("express");

const indexRouter = Router();

const messages = [
];

indexRouter.get("/", (req, res) => {
    res.render("index", { title: "Mini Messageboard", messages: messages });
});
indexRouter.post("/", (req, res) => {
    messages.push({text: req.body.message, user: req.body.name, added: new Date()});
    res.redirect("/");
})

module.exports = indexRouter;
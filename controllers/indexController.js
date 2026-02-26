const link = { href: "new", text: "New Message" };
const db = require("../db/queries");

async function indexGet(req, res) {
    const messages = await db.getAllMessages();
    res.render("index", { title: "Mini Messageboard", messages: messages, link: link });
}

async function indexPost(req, res) {
    await db.insertNewMessage(req.body.name, req.body.message, new Date());
    // messages.push({text: req.body.message, user: req.body.name, added: new Date()});
    res.redirect("/");
}

module.exports = {
    indexGet,
    indexPost
}
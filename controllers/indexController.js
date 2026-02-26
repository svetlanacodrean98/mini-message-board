const messages = [];
const link = { href: "new", text: "New Message" };

function indexGet(req, res) {
    res.render("index", { title: "Mini Messageboard", messages: messages, link: link });
}

function indexPost(req, res) {
    messages.push({text: req.body.message, user: req.body.name, added: new Date()});
    res.redirect("/");
}

module.exports = {
    indexGet,
    indexPost
}
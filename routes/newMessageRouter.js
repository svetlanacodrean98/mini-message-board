const { Router } = require("express");
const newMessageController = require("../controllers/newMessageController");

const newMessageRouter = Router();

newMessageRouter.get("/", newMessageController.newMessageGet);

module.exports = newMessageRouter;
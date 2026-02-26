const pool = require("./pool");

async function getAllMessages() {
    const { rows } = await pool.query("select * from messages");
    return rows;
}

async function insertNewMessage(author, message, date) {
    await pool.query("insert into messages (author, message, date) values ($1, $2, $3)", [author, message, date]);
}

module.exports = {
    getAllMessages,
    insertNewMessage
};
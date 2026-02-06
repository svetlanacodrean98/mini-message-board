const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("hey"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, (error) => {
    if (error) {
        throw error;
    }
    console.log(`Listening on port ${PORT}!`);
})
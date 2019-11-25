const express = require("express");

const keys = require("./config/devKeys");

const app = express();

app.listen(keys.PORT, () => {
    console.log(`Server running @${keys.PORT}`);
});

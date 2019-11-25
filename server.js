const express = require("express");

const keys = require("./config/devKeys");

const app = express();

const authRoutes = require("./routes/api/auth");

app.use("/api/auth", authRoutes);

app.listen(keys.PORT, () => {
  console.log(`Server running @${keys.PORT}`);
});

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 5000;
const { MONGOURI } = require("./keys");

mongoose.connect(MONGOURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
});
mongoose.connection.on("connected", () => {
  console.log("Conneted to mongoDB");
});
mongoose.connection.on("error", () => {
  console.log("error in connecting");
});

require("./models/user");

app.use(express.json());
app.use(require("./routes/auth"));
app.use(require("./routes/user"));

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});

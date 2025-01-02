const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const routes = require("./routes/routes.js");

const app = express();
const PORT = 5001;

app.use(bodyParser.json());
app.use(cors());

app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});

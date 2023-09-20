const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use("/api/occurrences", require("./routes/occurrences"));
app.use("/api/taxonomies", require("./routes/taxonomies"));

app.listen(port);

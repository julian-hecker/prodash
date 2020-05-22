// === Packages ===
const express = require("express"),
    path = require("path");

// === App Config ===
const app = express(),
    buildDirectory = path.join(__dirname, "..", "build");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(buildDirectory));


// === Routes ===
// app.use("/api", require("../routes/api.js"));

app.get("*", (req, res) => {
    res.sendFile(path.join(buildDirectory, "index.html"));
});


// === Run Server ===
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`http://localhost:${port}/`);
});

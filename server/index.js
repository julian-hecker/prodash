// === Packages ===
const express = require("express"),
  cors = require("cors"),
  path = require("path");

// === App Config ===
const app = express(),
  buildDirectory = path.join(__dirname, "..", "build");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(buildDirectory));
// app.use(cors());

// === Routes ===
// app.use("/api", require("../routes/api.js"));
function isPrime(n) {
  if (n != 2 && n != 3 && n != 5 && n != 7) {
    if (n % 2 == 0 || n % 3 == 0 || n % 5 == 0 || n % 7 == 0) {
      return false;
    }
    return true;
  }
}

app.get("/api/prime/:n", (req, res) => {
  res.json(isPrime(req.params.n));
});

app.get("*", (req, res) => {
  res.sendFile(path.join(buildDirectory, "index.html"));
});

// === Run Server ===
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`http://localhost:${port}/`);
});

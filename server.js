const express = require("express");
const app = express();
const path = require("path");
const serveStatic = require("serve-static");

app.use("/", serveStatic(path.join(__dirname, "/dist")));

app.get(/.*/, function(req, res) {
    res.sendFile(path.join(__dirname, "/dist/index.html"));
});

// app.use(express.static(__dirname + "/dist/first-vue-project"));

// app.get("/*", function(req, res) {
//     res.sendFile(path.join(__dirname + "/dist/first-vue-project/index.html"));
// });
// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 9000);

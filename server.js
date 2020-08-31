const express = require("express");
const app = express();
const path = require("path");
const forceSSl = function() {
    return function(req, res, next) {
        if (req.headers["x-forwarded-proto"] !== "https") {
            return res.redirect(
                ["https://", req.get("Host"), req.url].join("")
            );
        }
        next();
    };
};
app.use(express.static(__dirname + "/dist/first-vue-project"));

app.get("/*", function(req, res) {
    res.sendFile(path.join(__dirname + "/dist/first-vue-project/index.html"));
});
// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 9000);

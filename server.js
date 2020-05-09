var express = require("express");
var path = require("path"); 

var PORT = process.env.PORT || 3000;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./index.html"));
});

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});

const express = require("express");
const gulp = require("gulp");

const app = express();

app.get("/", function(req, res) {
  res.send("Hello, World! It is me");
});

gulp.task("default", console.log("Hello, world and gulp"));

gulp.task("server", cb => {
  app.listen(process.env.PORT || 3000, cb);
});

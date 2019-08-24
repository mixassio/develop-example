const express = require("express");
const models = require('./models');

const app = express();

app.get("/", async (req, res) => {
  const { User } = models;
  const user = User.build('mixassio@mail.ru');
  try {
    await user.save();
    const users = await User.findAll();
    res.send(`Hello, World! count: ${users.length}`);
  } catch (e) {
    console.error(e);
  }
  res.send(`Hello, World!`);
});

app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});

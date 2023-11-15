const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(
  cors({
    origin: "*",
  })
);

const data = {
  users: [
    {firstName: "John", lastName: "Doe"},
    {firstName: "Anna", lastName: "Smith"},
    {firstName: "Peter", lastName: "Jones"},
  ],
};

app.use("/pzaw_zadanie_03", (req, res, next) => {
  if (
    req.method !== "GET" &&
    req.method !== "POST" &&
    req.method !== "DELETE" &&
    req.method !== "PUT"
  ) {
    res.status(405).send("Method Not Allowed");
  } else {
    next();
  }
});

app.get("/pzaw_zadanie_03", (req, res) => {
  res.json(data.users);
});

app.post("/pzaw_zadanie_03", (req, res) => {
  const newUser = req.body;
  if (newUser && newUser.firstName && newUser.lastName) {
    data.users.push(newUser);
    res.json(newUser);
  } else {
    res.status(400).send("Invalid user format");
  }
});

app.delete("/pzaw_zadanie_03/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  if (isNaN(userId) || userId < 0 || userId >= data.users.length) {
    res.status(404).send("User Not Found");
  } else {
    const deletedUser = data.users.splice(userId, 1)[0];
    res.json(deletedUser);
  }
});

app.put("/pzaw_zadanie_03/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  if (isNaN(userId) || userId < 0 || userId >= data.users.length) {
    res.status(404).send("User Not Found");
  } else {
    const updatedUser = req.body;
    if (updatedUser && updatedUser.firstName && updatedUser.lastName) {
      data.users[userId] = updatedUser;
      res.json(updatedUser);
    } else {
      res.status(400).send("Invalid user format");
    }
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

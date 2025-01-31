const express = require("express");
require("./db/mongoose");

// Import Routers
const userRouter = require("./router/user");
const taskRouter = require("./router/task");

const app = express();
const port = process.env.PORT;

app.use(express.json());
// -- Users --
app.use(userRouter);
// -- Task --
app.use(taskRouter);

// 'start' the server
app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});

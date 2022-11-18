const express = require("express");
const mongoose = require("mongoose");
const Cors = require("cors");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const userRouter = require("./routes/userRoute");
const topicRouter = require("./routes/topicRoute");

const app = express();

const DB = process.env.DATABASE.replace("<Password>", process.env.DB_PASSWORD);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Congrulations your are connected to database..."))
  .catch((err) => console.log(err));

app.use(express.json());

app.use(
  Cors({
    origin: "*",
    credentials: true,
    optionsSuccessStatus: 200,
  })
);

app.use("/api/v1/users", userRouter, topicRouter);

app.listen(process.env.PORT || 8000, () => {
  console.log("Backend Server is running");
});

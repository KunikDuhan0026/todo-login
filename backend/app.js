require("dotenv").config();
require("./Config/database").ToDoDataBase();
const express = require("express");
const app = express();
const cors = require('cors');
const todoRouters = require("./Routes/todoRoutes");
const userRoutes = require("./Routes/userRoutes");
const cookieParser = require('cookie-parser');
const auth = require("./middleware/auth");


 
app.use(cors({
  credentials : true,
 method : ["POST","GET"],
  origin : ["https://kunik-todo-login-front.vercel.app","https://kunik-todo-login-api.vercel.app"]
}));
app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/", todoRouters);
app.use("/", userRoutes);
// app.use("/", userRoutes);


module.exports =app;

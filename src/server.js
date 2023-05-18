
require('express-async-errors');
const express = require("express");
const ServerErro = require('./Error/serverError');

const userRouter = require("./router/usersRouter");

const app = express();
app.use(express.json());

app.use(userRouter);

app.use((err, req, res, next) =>{
    console.error(err);
    if (err instanceof ServerErro) {
        res.status(err.statusCode).json(err);    
    }
    else{
        res.status(500).json("internal server Error");
    }
});

app.listen(8080);
 
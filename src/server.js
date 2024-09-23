
require('express-async-errors');
const express = require("express");
const ServerErro = require('./Error/serverError');

const userRouter = require("./router/usersRouter");
const estadoRouter = require("./router/estadosRouter");
const cidadeRouter = require("./router/cidadeRouter");
const campanhas  = require("./router/campanhaRouter");

const app = express();
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));

app.use(userRouter);
app.use(estadoRouter);
app.use(cidadeRouter);
app.use(campanhas)

app.use((err, req, res, next) =>{
    console.log(req);
    
    console.error(err);
    if (err instanceof ServerErro) {
        res.status(err.statusCode).json(err);    
    }
    else{
    res.status(500).json({statusCode: 500, message: "internal server Error"});
    }
});

app.listen(process.env.PORT ? Number(process.env.PORT): 3000);
 
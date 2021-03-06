import express from'express';
import morgan from'morgan';
import cors from 'cors';
import path from 'path';
import cookieParser from "cookie-parser"
import {requireAuth} from "./middleware/authMiddleware"
require("dotenv").config();

const corsOptions = {
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
}

const app = express();

//CONEXION A BASE DE DATOS
const mongoose = require('mongoose');
const uri = "mongodb+srv://root:holamundo951@cluster0.oyreu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const options = {useNewUrlParser: true, useUnifiedTopology: true};

mongoose.connect(uri, options,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(
    db => { console.log('Conectado a',db.connection.name) },
    err => { console.log(err) }
);


//MIDDLEWARE
app.use(cookieParser())
app.use(morgan('dev'));
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'public')))



//RUTAS
app.use('/auth',requireAuth, require('./routes/AuthRouter')); 
app.use('/api', require('./routes/rutas'));
//-------------------------------------

app.set('puerto', process.env.PORT || 4000);
app.listen(app.get('puerto'), function () {
    console.log('\n\nhttp://localhost:'+app.get('puerto'));
});

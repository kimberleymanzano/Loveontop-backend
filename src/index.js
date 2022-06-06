const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

// const { json } = require('express/lib/response');
// const res = require('express/lib/response');

//configuraciones
app.set('port', 3000);
app.set("json spaces",2); //genera espacios en el mostrados

//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

//rutas
app.use('/api/product',require('./routes/rutas'));

//empezando el servidor
app.listen(app.get('port'));
console.log("SUMMA CUM LAUDE");
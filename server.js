require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoute')
const morgan = require('morgan');
const cors = require('cors');
connectDB();

const app = express();

app.use(express.json());

app.use(morgan("dev"))
app.use(cors())
app.use('/api/products', productRoutes)

const PORT = process.env.PORT || 4000;

app.listen(4000, () => console.log(`Servidor Escuchando en el puerto ${PORT} `))
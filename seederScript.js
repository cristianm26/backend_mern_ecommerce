require('dotenv').config();

const connectDB = require('./config/db');
const productsData = require('./data/products');
const Product = require('./models/Product');

connectDB();

const importData = async () => {
    try {
        await Product.deleteMany({});

        await Product.insertMany(productsData);

        console.log('Data Importada Correctamente');

        process.exit();

    } catch (error) {
        console.log(error);
        process.exit(1);

    }
}

importData();
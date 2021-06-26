require('dotenv').config();
const mongoose = require('mongoose');



const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        console.log('La conexion a la base de datos fue Exitosa')
    } catch (error) {
        console.log(`Huno un Error ${error}`)
        process.exit(1)
    }
}

module.exports = connectDB
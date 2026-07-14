const mongoose = require('mongoose');
require('dotenv').config();

const DatabaseConnection = () => {
    mongoose.connect(process.env.DATABASE)
        .then(() => {
            console.log('Database Connected Successfully')
        })
        .catch((err) => {
            console.log(err);
        })
}

module.exports = DatabaseConnection;
const { connect } = require('mongoose');


const conectarDB = async () => {
    try {
        connect(process.env.URI_MONGODB);
        console.log('Base de datos conectada');
    } catch (err) {
        console.log(err);
    }
}


module.exports = conectarDB;
const mongoose = require('mongoose')

const anunciosSchema = new mongoose.Schema({
    autor:[{}], //! refernciar a coleccion personas

    fecha:{type: Date,
        required: true},

    anuncio:{type: String},

    materias:[{}], //! referenciar a coleccion materias
    
    comentarios:[{autor: [{}], //!referenciar a coleccion materias
comentario:{type: String},
fecha:{type:Date}}]
})

module.exports = Anuncios = mongoose.model('anuncios', anunciosSchema)
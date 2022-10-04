const mongoose = require('mongoose')

const MateriasSchema = new mongoose.Schema({
    nombre:{
        type: String,
        required: true,
    },
    descripcion:{
        type: String,
        required: true
    },
    profesores:[{}],
    
    notas:[
        {
                alumno:{}, //!referenciar a la coleccion personas=>alumno
                parcial1:{type: String},
                parcial2:{type: String},
                recuperatorio1:{type: String},
                recuperatorio2:{type: String},
                recuperatorioIntegrador:{type: String},
                notaFinal:{type: String},
                estado:{type: String}
        }
    ],
    asistencia:[
        {fecha:{type: Date},
    alumno:{}} //!referenciar a la coleccion personas=>alumno
    ],
    activo: {type: Boolean, default: true}
})

module.exports = Materias = mongoose.model('materias', MateriasSchema)
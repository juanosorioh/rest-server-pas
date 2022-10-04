const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    nombre:{
        type: String,
        required: true,
    },
    apellido:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    birthdate:{
        type: Date,
        required: true
    },
    dni:{
        type: Number,
        required: true
    },
    telefono:{
        type: String,
        required: true
    },
    Roles:[
        {
            rol:[{
                alumno:{type:Boolean, default:true},
                profesor:{type:Boolean, default:false},
                administrativo:{type:Boolean, default:false}
            }],
            datosAlumnos:[
                {
                   carrera:{type: String},
                   titulo:{type: String}  
                }
            ],
            datos:[{datos:{type: String}}]

        }
    ],
    activo: {type: Boolean, default: true}
})

module.exports = User = mongoose.model('user', UserSchema)
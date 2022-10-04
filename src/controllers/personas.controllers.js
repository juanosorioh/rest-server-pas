const Personas = require('../models/Personas');
const bcrypt = require('bcrypt');
//const generarJWT = require('../helpers/generarJwt')

const ctrlPersonas = {};

// POST -> Ctrl para Login de usuario
ctrlPersonas.login = async (req, res) => {

   const { email, password } = req.body;

   if (!email || !password) {
      return res.status(400).json({
         msg: 'Error de autenticación'
      })
   };


   // Busqueda del usuario segun las credenciales recibidas
   const persona = await persona.findOne({ email, password });

   if (!persona.activo) {
      return res.status(400).json({
         msg: 'Error al autenticarse, verifique las credenciales'
      })
   };

   // Generación del token de autenticación
   /* const token = await generarJWT({uid: persona._id});

   return res.json({
      persona,
      token
   }); */

}

ctrlPersonas.getPersonas = (req, res) => {
   return res.json({
      msg: 'GET'
   });
};


// POST -> Crear nuevo usuario comun =>Personas
ctrlPersonas.postPersonas = async (req, res) => {

   const {nombre, apellido, dni, birthdate, telefono, password, confirmPassword, email, roles = ['Alumno'],  } = req.body;

   if (password !== confirmPassword) {
      return res.status(400).json({
         msg: 'Verifique los campos y vuelva a intentarlo'
      });
   };

   const passwordHashed = bcrypt.hashSync(password, 10);


   const nuevoPersonas = new Personas({
      password: passwordHashed,
      email,
      roles,
      nombre, 
      apellido, 
      dni, 
      birthdate, 
      telefono

   });


   try {
      const PersonasCreado = await nuevoPersonas.save();

      return res.json({
        PersonasCreado
      });
   } catch (error) {
      console.log(error.message);
      return res.status(400).json({
         msg: 'Error al crear Personas'
      });
   }
};





ctrlPersonas.putPersonas = (req, res) => {
   return res.json({
      msg: 'PUT'
   });
};


module.exports = ctrlPersonas;
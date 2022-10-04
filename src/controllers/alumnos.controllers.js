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

ctrlPersonas.getUsers = (req, res) => {
   return res.json({
      msg: 'GET'
   });
};


// POST -> Crear nuevo usuario comun =>alumno
ctrlPersonas.postUsers = async (req, res) => {

   const {nombre, apellido, dni, birthdate, telefono, password, confirmPassword, email, roles = ['alumno'],  } = req.body;

   if (password !== confirmPassword) {
      return res.status(400).json({
         msg: 'Verifique los campos y vuelva a intentarlo'
      });
   };

   const passwordHashed = bcrypt.hashSync(password, 10);


   const nuevoAlumno = new Personas({
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
      const usuarioCreado = await nuevoUsuario.save();

      return res.json({
         usuarioCreado
      });
   } catch (error) {
      console.log(error.message);
      return res.status(400).json({
         msg: 'Error al crear el usuario'
      });
   }
};





ctrlPersonas.putUsers = (req, res) => {
   return res.json({
      msg: 'PUT'
   });
};
ctrlPersonas.deleteUsers = (req, res) => {
   return res.json({
      msg: 'DELETE'
   });
};

module.exports = ctrlPersonas;
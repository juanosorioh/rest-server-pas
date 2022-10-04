const router = require("express").Router();
const { check } = require("express-validator");
const {
  getPersonas,
  postPersonas,
  putPersonas,
  deletePersonas,
  login,
} = require("../controllers/personas.controllers");

const validarCampos = require("../helpers/validarCampos");

const mensajeValidacion = "Todos los campos son obligatorios";
const mensajeVal = "Revise los campos y vuelva a intentarlo";

router.post("/login", login);

router.get("/", getPersonas);

router.post(
  "/",
  [
    check("nombre")
      .not()
      .isEmpty()
      .withMessage(mensajeValidacion)
      .isString()
      .withMessage(mensajeVal),
    check("apellido")
      .not()
      .isEmpty()
      .withMessage(mensajeValidacion)
      .isString()
      .withMessage(mensajeVal),
    check("dni")
      .not()
      .isEmpty()
      .withMessage(mensajeValidacion)
      .isNumeric()
      .withMessage(mensajeVal),
    check("telefono")
      .not()
      .isEmpty()
      .withMessage(mensajeValidacion)
      .isNumeric()
      .withMessage(mensajeVal),
    check("fechaNac")
      .not()
      .isEmpty()
      .withMessage(mensajeValidacion)
      .isDate()
      .withMessage(mensajeVal),
    check("password")
      .not()
      .isEmpty()
      .withMessage(mensajeValidacion)
      .isString()
      .withMessage(mensajeVal),
    check("email")
      .not()
      .isEmpty()
      .withMessage(mensajeValidacion)
      .isString()
      .withMessage(mensajeVal),
    check("confirmPassword")
      .not()
      .isEmpty()
      .withMessage(mensajeValidacion)
      .isString()
      .withMessage(mensajeVal),
    check("roles")
      .not()
      .isEmpty()
      .withMessage(mensajeValidacion)
      .isString()
      .withMessage(mensajeVal),
    validarCampos,
  ],
  postPersonas
);

router.put("/", putPersonas);

router.delete("/", deletePersonas);

module.exports = router;

var express = require('express');
var router = express.Router();
const heroesController = require("../controllers/heroesController")

router.get("/",heroesController.mostrar)

router.get("/detalle",heroesController.agregarid)

router.get("/detalle/:id", heroesController.mostrarDetalle)

router.get("/bio", heroesController.error)

router.get("/bio/:id/:ok?", heroesController.mostrarPorOk)

module.exports = router;
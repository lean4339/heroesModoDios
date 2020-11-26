const heroes = require("../modulos/heroes")
let controlador = {
    mostrar: (req,res)=>{
        res.render("heroes", {heroes : heroes})
    },
    agregarid:(req,res)=>{
        res.render("AgregarId", {titulo: "Por favor agrega un id luego de '/detalle'"})
    },
    mostrarDetalle : (req,res)=>{
        let id = req.params.id;
        let heroe= null;
        for (let i = 0; i < heroes.length; i++){
            if(Number(id)== heroes[i].id){
                heroe= heroes[i] 
            }
        }
        if(heroe !== null){
            res.render("heroesDetalle", {titulo:`Hola mi nombre es: ${heroe.nombre} y soy ${heroe.profesion}`})
        }
        else{
            res.render("heroesDetalle", {titulo: "El heroe no se encuentra en la lista"})
        }
    },
    mostrarPorOk: (req,res)=>{
        let id = req.params.id;
        let heroe;
        let ok = req.params.ok;
        for (let i = 0; i < heroes.length; i++){
            if(Number(id)== heroes[i].id){
                heroe= heroes[i];
            }
        }
       
        switch(true){
            case heroe== null && ok == undefined:
                res.render("heroesBioOk",{titulo: "No se encuentra el heroe o la heroina"});
                break;
            case heroe== null && ok == "ok":
                res.render("heroesBioOk",{titulo: "No se encuentra el heroe o la heroina"});
                break;
            case heroe !== null && ok !== "ok":
                res.render("heroesBioOk", {titulo:`Hola soy ${heroe.nombre} lamento que no desees saber mas de mi` });
                break;
            case heroe !== null && ok == "ok":
                res.render("heroesBioOk",{titulo: `hola soy ${heroe.nombre} y esta es mi historia : ${heroe.resenia}` });
                break;
        }
    },
    error : (req,res)=>{
        res.render("errorA", {titulo: "Por favor pon algo luego de '/bio' "})
    }
}


module.exports = controlador;
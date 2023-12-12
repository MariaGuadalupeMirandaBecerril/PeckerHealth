var ruta = require("express").Router();
var {autorizado} = require("../middlewares/password");
const conexion = require("../bd/conexion");
var { mostrarExpedientes, nuevoExpediente, modificarExpediente, borrarExpediente, buscarporID } = require("../bd/expedientesBD");

ruta.get("/mostrarExpedientes",autorizado,async(req,res)=>{
    var expedientes = await mostrarExpedientes();
    res.render("expedientes/mostrar",{expedientes})
});

ruta.get("/nuevoexpediente",autorizado,(req,res)=>{
    res.render("expedientes/nuevo");
});

ruta.post("/nuevoexpediente",autorizado,async(req,res)=>{
    var error = await nuevoExpediente(req.body);
    res.redirect("/mostrarExpedientes");
});

ruta.get("/editarExpediente/:id",async(req,res)=>{
    console.log(req.params.id);
    var medicalFile = await buscarporID(req.params.id);
    res.render("expedientes/modificar",{medicalFile})
    res.end();
});

ruta.post("/editarExpediente",async(req,res)=>{
    var error = await modificarExpediente(req.body);
    res.redirect("/mostrarExpedientes");
});

ruta.get("/borrarExpediente/:id",async(req,res)=>{
    try {
        await borrarExpediente(req.params.id); 
        res.redirect("/mostrarExpedientes");
    }
    catch (err) {
        console.log("Error al borrar el expediente "+err);
    }
});

module.exports=ruta;
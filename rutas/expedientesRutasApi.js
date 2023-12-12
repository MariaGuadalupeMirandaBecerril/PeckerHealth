var ruta = require("express").Router();
const conexion = require("../bd/conexion");
var { mostrarExpedientes, nuevoExpediente, modificarExpediente, borrarExpediente, buscarporID } = require("../bd/expedientesBD");

ruta.get("/api/mostrarExpedientes",async(req,res)=>{
    var expedientes = await mostrarExpedientes();
    if (expedientes.length==0) {
        res.status(400).json("No hay expedientes");
    } else {
        res.status(200).json(expedientes);
    }
});

ruta.post("/api/nuevoexpediente",async(req,res)=>{
    var error = await nuevoExpediente(req.body);
    if (error==0) {
        res.status(200).json("Expediente registrado correctamente");
    } else {
        res.status(400).json("Error al registrar el expediente");
    }
});

ruta.get("/api/buscarExpedientesPorId/:id",async(req,res)=>{
    var medicalFile = await buscarporID(req.params.id);
    if (medicalFile=="") {
        res.status(400).json("Status no encontrado");
    } else {
        res.status(200).json(medicalFile);
    }
});

ruta.post("/api/editarExpediente",async(req,res)=>{
    var error = await modificarExpediente(req.body);
    if (error==0) {
        res.status(200).json("Expediente actualizado correctamente");
    }
    else {
        res.status(400).json("Error al actualizar el expediente");
    }
});

ruta.get("/api/borrarExpediente/:id",async(req,res)=>{
    var error = await borrarExpediente(req.params.id);
    if (error==0) {
        res.status(200).json("Expediente borrado");
    }
    else {
        res.status(400).json("Error al borrar el expediente");
    }
});

module.exports=ruta;
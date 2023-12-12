var conexion = require("./conexion").conexionExpedientes;
var Expediente = require("../modelos/Expediente");

async function mostrarExpedientes(datos) {
    var medicalFiles= [];
    try{
        var expedientes = await conexion.get();
        expedientes.forEach((expediente)=>{
            var expediente1 = new Expediente(expediente.id, expediente.data());
            if (expediente1.bandera==0) {
                medicalFiles.push(expediente1.obtenerExpediente);
            }
        });
    }
    catch(err){
        console.log("Error al obtener los expedientes de firebase "+err);
    }
    return medicalFiles;
}

async function buscarporID(id) {
    var medicalFile;
    try {
        var expedientebd = await conexion.doc(id).get();
        var expedienteObjeto = new Expediente(expedientebd.id, expedientebd.data());
        if (expedienteObjeto.bandera==0) {
            medicalFile = expedienteObjeto.obtenerExpediente;
        }
    }
    catch (err) {
        console.log("Error al buscar el expediente "+err);
        medicalFile=null;
    }
    return medicalFile;
}

async function nuevoExpediente(datos) {
    var expediente = new Expediente(null, datos);
    var error=1;
    if (expediente.bandera==0) {
        try {
            await conexion.doc().set(expediente.obtenerExpediente);
            console.log("Expediente registrado correctamente");
            error = 0;
        }
        catch (err) {
            console.log("Error al registrar el expediente "+err);
        }
    }
    return error;
}

async function modificarExpediente(datos) {
    var medicalFile = await buscarporID(datos.id);
    var error = 1;
    if (medicalFile!=undefined) {
        var expediente = new Expediente(datos.id, datos);
        if (expediente.bandera==0) {
            try {
                await conexion.doc(expediente.id).set(expediente.obtenerExpediente);
                console.log("Expediente actualizado correctamente");
                error = 0;
            }
            catch (err) {
                console.log("Error al modificar el expediente "+err);
            }
        }
        else {
            console.log("Los datos no son correctos");
        }
    }
    return error;
}

async function borrarExpediente(id) {
    var error = 1;
    var medicalFile = await buscarporID(id);
    if (medicalFile!=undefined) {
        try {
            await conexion.doc(id).delete();
            console.log("Expediente borrado correctamente");
            error = 0;
        }
        catch (err) {
            console.log("Error al borrar el expediente "+err);    
        }
    }
    return error;
}

module.exports={
    mostrarExpedientes,
    buscarporID,
    nuevoExpediente,
    modificarExpediente,
    borrarExpediente
}
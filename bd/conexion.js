var admin = require("firebase-admin");
var keys = require("../serviceAcountKeys.json")

admin.initializeApp({
    credential:admin.credential.cert(keys)
});

var db = admin.firestore();
var conexionUsuarios = db.collection("usuarios");
var conexionExpedientes = db.collection("expedientes");

module.exports={
    conexionUsuarios,
    conexionExpedientes
};
const fotoRepositorie = require("../repositories/fotosRepositorie");
const Foto = require("../models/fotosCampanhas");

exports.insert = async function (id, fotos) {

    fotos.forEach(foto =>  {
        fotoRepositorie.insert(id, foto);
    });
    
}
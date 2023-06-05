const fotoRepositorie = require("../repositories/fotosRepositorie");
const Foto = require("../models/fotosCampanhas");

exports.insert = async function (id, fotos) {
        
    for (const foto of fotos) {
        await fotoRepositorie.insert(id, foto);
    }

}
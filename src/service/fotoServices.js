const fotoRepositorie = require("../repositories/fotosRepositorie");
const Foto = require("../models/fotosCampanhas");

exports.insert = async function (fotos) {

    for (const foto in fotos) {
        await fotoRepositorie.insert(foto);
    }    
    
}
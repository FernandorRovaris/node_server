const fotoRepositorie = require("../repositories/fotosRepositorie");
const Foto = require("../models/fotosCampanhas");

exports.insert = async function (id, fotos) {

    for (const foto in fotos) {
        console.log("aqui");
        console.log(foto);
        await fotoRepositorie.insert(id, foto);
    }    
    
}
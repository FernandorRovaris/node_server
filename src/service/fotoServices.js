const fotoRepositorie = require("../repositories/fotosRepositorie");
const Foto = require("../models/fotosCampanhas");

exports.insert = async function (foto) {
    
    const newobj =  await fotoRepositorie.insert(foto);

    const newUser = new Foto(newobj.id,
                            newobj.campanhaId,
                            newobj.foto);
    return newUser;
    
}
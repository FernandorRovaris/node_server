const fotoRepositorie = require("../repositories/fotosRepositorie");
const Foto = require("../models/fotosCampanhas");

exports.insert = async function (foto) {
    
    const newobj =  await fotoRepositorie.insert(foto);

    let imagebase64;

    if (newobj.foto != null) {
        const imagefile = Buffer.from(newobj.foto).toString('base64');

        const buffer = Buffer.from(imagefile, 'base64');
    
        imagebase64 = buffer.toString('utf-8')
    }

    const newUser = new Foto(newobj.id,
                            newobj.campanha_id,
                            imagebase64);
    return newUser;
    
}
const fotoRepositorie = require("../repositories/fotosRepositorie");

exports.insert = async function (foto) {
    
    const newobj =  await fotoRepositorie.insert(foto);

    const newUser = new User(newobj.id,
                            newobj.campanhaId,
                            newobj.foto);
    return newUser;
    
}
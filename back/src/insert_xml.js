const db = require('./database');

async function Insere(products){

    try{
        var resultado = await db.table('produtos').insert(products).returning('*');
        return resultado;       
    }
    catch(err){
        return err;
    }
}

module.exports = Insere

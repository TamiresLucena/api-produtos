const db = require('./database')

async function Seleciona(pesquisa){

    try{
        var resultado = await db.select()
            .table('produtos')
            .whereRaw(`id::TEXT = '${pesquisa}'`)
            .orWhere('name', pesquisa)
            .orWhereRaw(`'${pesquisa}' = ANY(tags)`);
    
        resultado = resultado.length == 0 ? 'Produto não encontrado!' : resultado;
        return resultado;
    }
    catch(err){
        return err;
    }

}

module.exports = Seleciona
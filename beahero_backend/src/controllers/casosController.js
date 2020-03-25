const conexao = require('../database/conexao');

module.exports = {
    async Criar(req, res){
        const {titulo, descricao, valor} = req.body;
        const ong_id = req.headers.authorization;
        
        const caso = await conexao('casos').insert({titulo, descricao, valor, ong_id})

        console.log({titulo, descricao, valor, ong_id});

        return res.json(caso[0]);
    },

    async Listar(req, res){
        const {page = 1} = req.query;

        const [qtde] = await conexao('casos').count();
        res.header('X-Total-Count', qtde['counts(*)']);

        const lista = await conexao('casos')
        .join('ongs', 'ongs.id', '=', 'casos.ong_id')
        .limit(3)
        .offset((page - 1)*3)
        .select(['casos.*', 'ongs.nome', 'ongs.email', 'ongs.whatsapp', 'ongs.cidade', 'ongs.uf' ]);
        return res.json(lista);
    },

    async Deletar(req, res){
        const {id} = req.params;
        const ong_id = req.headers.authorization;

        const caso = await conexao('casos').where('id', id).select('ong_id').first();
        if(caso.ong_id !== ong_id){
            return res.status(401).json({error:'Operacao não permitida para usuario logado'});
        }

        await conexao('casos').where('id', id).delete();
        return res.status(204).send();

    }
};
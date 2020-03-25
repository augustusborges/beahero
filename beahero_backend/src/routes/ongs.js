const express = require('express');
const crypto = require('crypto');
const conexao = require ('../database/conexao');

const router = express.Router();

router.post("/", async (req, res, next)=>{
    const id = crypto.randomBytes(4).toString('HEX');
    const {nome, email, whatsapp, cidade, uf} = req.body;

    await conexao('ongs').insert({id, nome, email, whatsapp, cidade, uf})

    return res.json({"id":id});
});

router.get("/", async (req, res, next)=>{
    
    const ongs = await conexao('ongs').select('*');

    return res.json(ongs);
});

router.get("/:id", async (req, res, next)=>{
    
    const ong = await conexao('ongs').select('*').where({id:req.params.id})

    return res.json(ong[0]);
});

module.exports = router;
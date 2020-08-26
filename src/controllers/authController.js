const express = require('express');
const Auth = require('../models/Auth');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json');
const router = express.Router();

function generateToken(params = {}){
    return jwt.sign({ params }, authConfig.secret, {
        expiresIn: 86400, 
    });
}

router.post('/register', async(req, res) => {
    const { email } = req.body;
    try {
        if(await Auth.findOne({ email }))
            return res.status(400).send({ error : 'Email já existe para esse Login! '});

        const auth = await Auth.create(req.body);
        auth.password = undefined;
        return res.send({
            auth,
            token: generateToken({ id : auth.id })
        });

    } catch (error) {
        return res.status(400).send({
            error : 'Falha no registro'
        });
    }
});

router.post('/authenticate', async(req, res) => {
    const { email, password } = req.body;

    const auth = await Auth.findOne({ email }).select('+password');
    if(!auth)
        return res.status(400).send({ error: 'Usuario não encontrado! '});
        
    if(!await bcrypt.compare(password, auth.password))    
        return res.status(400).send({ error: 'Senha invalida! '});

    auth.password = undefined;
    
    res.send({
        auth,
        token: generateToken({ id : auth.id }) })
});

module.exports = app => app.use('/auth', router);
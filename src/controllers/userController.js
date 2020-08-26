const express = require('express');
const User = require('../models/User');
const authMiddleware = require('../middelwares/auth');
const router = express.Router();
router.use(authMiddleware);

router.get('/', async(req, res) => {
    try {
        users = await User.find();

        return res.send({ users });
        console.log(ok);
    } catch (error) {
        return res.status(400).send({
            error : 'Falha na listagem de usuarios! '
        });
    }
});

router.post('/', async(req, res) => {
    const { email } = req.body;
    try {
        if(await User.findOne({ email }))
            return res.status(400).send({ error : 'Usuario já existe! '});

        const user = await User.create(req.body);
        return res.send({user});

    } catch (error) {
        return res.status(400).send({
            error : 'Falha no registro'
        });
    }
});

router.put('/:idUser', async(req, res) => {
    req.body.updatedAt = new Date();
    
    try {
        const user = await User.findByIdAndUpdate(req.params.idUser, req.body, {new: true});
        
        return res.send({user});

    } catch (error) {
        return res.status(400).send({
            error : 'Falha ao atualizar usuario! '
        });
    }
});

router.delete('/:idUser', async(req, res) => {
    try {
        const user = await User.findByIdAndRemove(req.params.idUser);
        
        return res.send({user, msg : 'removida com sucesso! '});

    } catch (error) {
        return res.status(400).send({
            error : 'Falha ao deletar usuario! '
        });
    }
});

module.exports = app => app.use('/usuarios', router);
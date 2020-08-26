const mongoose = require('../database');
const bcrypt = require('bcryptjs');

const AuthSchema = new mongoose.Schema({
    grupo_permissao: {
        type: String,
        require: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        select: false, // evitar trazer o retorno da senha na requisiçao
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

AuthSchema.pre('save', async function(next){
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;

    next();
});
const Auth = mongoose.model('Auth', AuthSchema);

module.exports = Auth; 
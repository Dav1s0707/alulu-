const mongoose = require('mongoose')

const conexao = async() => {
    //conexao local
    //var bdlocal = await mongoose.connect('mongodb+srv://userAdmin:qweasdzxc1234@fiaptecnico.5oane.mongodb.net/crud')
    //conexao atlaas
    var atlas = await mongoose.connect('mongodb+srv://admin:12345@fiaptecnico.dakr2.mongodb.net/test')
}

module.exports = conexao
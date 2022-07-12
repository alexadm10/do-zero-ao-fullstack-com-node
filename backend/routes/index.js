
// arquivo de rotas

const router = require('express').Router()

//----------------------------------------------------------------------------
//                Conexão com o banco de dados MongoDB

require('../db/mongoConnection')

//-----------------------------------------------------------------------------

const portfolio = require('./portfolio')

router.get('/', (req,res) => {
    res.json({
        success: false,
        message: "Erro"
    })
})

router.use('/portfolio', portfolio)

module.exports = router
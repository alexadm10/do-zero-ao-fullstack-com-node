
const router = require('express').Router()

const Portfolio = require('../models/Portfolio')

//-----------------------------------------------------------------------------------------------
// CREATE
router.post('/', async (req,res) =>{
    const portfolio = new Portfolio({
        title: req.body.title,
        description: req.body.description
    })

    try{
        const savedPortfolio = await portfolio.save()
        res.json({
            success: true,
            data: savedPortfolio
        })
    }catch(err){
        res.json({
            success: false,
            message: err
        })
    }
    
    
})

// ------------------------------------------------------------------------------------------------
// READ
router.get('/', async (req,res)=>{
    try{
        const portfolio = await Portfolio.find()

        res.json({
            succes: true,
            data: portfolio
        })
    }catch(err){
        res.json({
            succes: false,
            message: err
        })
    }
    
})

router.get('/:slug', async (req,res) =>{
    try{
        const portfolio = await Portfolio.findOne({
            slug: req.params.slug
        })
        res.json({
            success: true,
            data: portfolio
        })
    }catch(err){
        res.json({
            success: true,
            message: err
        })
    }
    
})

//----------------------------------------------------------------------------------------------
// UPDATE

router.patch('/:slug', async (req,res) => {
    try{
        const updatedPortfolio = await Portfolio.updateOne({
            slug: req.params.slug
        },
        {
            title: req.body.title,
            description: req.body.description
        })

        res.json({
            success: true,
            updated: updatedPortfolio.nModified
            

        })

    }catch(err){
        res.json({
            success: true,
            message: err
        })
    }
})

//---------------------------------------------------------------------------------------------------------------
// delete

router.delete('/:slug', async (req, res) => {
    try{
        const deletedPortfolio = await Portfolio.deleteOne({
            slug: req.params.slug
        })

        res.json({
            success: true,
            deleted: deletedPortfolio.deletedCount
        })

    }catch(err){
        res.json({
            success: false,
            message: err
        })
    }
})



module.exports = router



//                                                                 USANDO CALLBACK
    // portfolio
    //     .save()   //o que estou fazendo
    //     .then((data) =>{ //o que acontece se der certo
    //         res.json({
    //             success: true,
    //             data
    //         })
    //     })   
    //     .catch((err) => { //o que acontece se der errado
    //         res.json({
    //             succces: false,
    //             message: err
    //         })
    //     })  
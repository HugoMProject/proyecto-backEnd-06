
const express = require('express');
const { renderUploadProductView, renderSuccessProductCreate } = require('../controllers/product');
const router = express.Router();


router.get('/cargar-producto', renderUploadProductView);
// router.post('/cargar-producto-backend',(res, req, next)=>{

    // if(!req.body.product_name req.body.product_name.lenght <5){
        // throw new Error("El producto no cumple las validaciones")
    // }
    // if(!req.body.product_name req.body.product_price <5){
        // throw new Error("El producto esta por debajo de $2")
    // }

    //next();
// }
    // renderSuccessProductCreate
// );

router.post('/cargar-producto-backend',
    body('product_name').exists().isLength({ min: 5 }).withMassage("El prodcuto tiene que ser mayor a 5 caracteres"),
    body('product_price').exists().isI({
        gt:1
    }).withMassage("El prodcuto el precio del producto tiene que ser mayor a $2"),
    renderSuccessProductCreate

)


//es una simple funcion ! middleware
router.get('/pepito',(req, res, next)=>{
    //todas nuestras validaciones
    return res.json({
        data: "Hola que tal"
    })


    next();
},(req, res)=> {
    console.log("Se ejecuto el codigo");

    return res.send('ruta middlware')
})

module.exports = router;
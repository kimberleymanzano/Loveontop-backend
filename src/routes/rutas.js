const { Router } = require('express');
const router = Router();

// const req = require('express/lib/request');
// const res = require('express/lib/response');

const product = require("./data.json");
console.log(product);


router.get('/',(req,res)=>{
    res.json(product);
});


//sacar toda la info desde un ID
router.get('/:id',(req,res)=>{
    const {id} = req.params;
    console.log(id);

    product.forEach(producto => {
        if(producto.id == id){
            res.json(producto);
        }
    });

    console.log(producto.id);
});

module.exports = router;
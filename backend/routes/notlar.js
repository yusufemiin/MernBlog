

const express=require('express')

const { notOlustur, notlarGetir, notGetir, notSil, notGuncelle } = require('../controllers/notController')

const router=express.Router()

router.get('/',notlarGetir)



//listeleme
router.get('/:id',notGetir)


//ekleme
router.post('/',notOlustur)


//silme
router.delete('/:id',notSil)

//güncelleme
router.patch('/:id',notGuncelle)

module.exports=router;
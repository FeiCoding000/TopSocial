const express =require('express');
const { getCardById,postCard, deleteCardById } = require('../controllers/cardController');
const cardsRouter= express.Router();




//Get /api/cards?id=1 get card by id
cardsRouter.get('/',getCardById);
cardsRouter.post('/',postCard);
cardsRouter.delete('/:card_id',deleteCardById)

//Post /api/cards


//Delete /api/cards/:card_id







module.exports=cardsRouter;
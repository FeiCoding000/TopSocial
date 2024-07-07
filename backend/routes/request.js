const express =require('express');
const requestRouter= express.Router();
const {getRequest}=require('../controllers/requestController');

//To get request
requestRouter.get('/',getRequest);






module.exports=requestRouter;
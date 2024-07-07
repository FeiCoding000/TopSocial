const axios =require('axios');

const CARDS_API_URL='http://localhost:8000/cards'

const getCardById= async function(req,res,next){
    const {id}=req.query;
    console.log('check',req.query);
    console.log('id',id);
    if(!id){
        return res.status(400).send('Id needs to be offered!');
    }
     try{
        const response=await axios.get(`${CARDS_API_URL}?id=${id}`);
        const card = response.data;
        console.log(card);
        if(!card.length){
          return  res.status(404).send('No card with this id!')
        }
        res.status(200).json({
            message:'Get card succeed!',
            data:card
        })



     } catch(error){
        next(error)

     }

};
//post card
const postCard = async function(req,res,next){
    const newCard=req.body; //{}
    //check if there is content in card
    if(!Object.keys(newCard)){
        return res.status(400).send('No content in card!')
    }
    try{
        await axios.post(CARDS_API_URL,newCard,{
            headers:{"Content-Type":"application/json"}
        });
        res.status(200).json({
            message:"Post card succeed!"
        })

    }catch(err){
        next(err)
    }





};

//delete card by id
const deleteCardById=async function(req,res,next){
    const id =req.params.card_id;
    if(!id){
        return res.status(400).send("No card id found!");
    };
    try {
        await axios.delete(`${CARDS_API_URL}/${id}`);
        res.status(200).json({
            msg:"card deleted"
        })

    }catch(err){
        next(err)
    }
};


module.exports={getCardById,postCard,deleteCardById}
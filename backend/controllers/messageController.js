const axios =require('axios');

const getMessage= async function(req,res,next){
    try{
        const url='http://localhost:8000/message';
        const message= await axios.get(url);
        res.status(200).json(
            {
                message:"Message received!",
                data:message.data
            }
        )
        

    }catch(err)
    {
      next(err);
    }

}

module.exports={getMessage};
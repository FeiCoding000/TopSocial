const axios = require('axios');

const getHighline= async function(req,res,next){
    try{
        const url ='http://127.0.0.1:8000/highline';
        const data = await axios.get(url);
        res.status(200).json({
            message:'Get highline succeed!',
            data:data.data
        })

    }catch(err){
        next(err)
        
    }

}


module.exports={getHighline};
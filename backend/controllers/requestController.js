const axios=require('axios');

const getRequest=async function(req,res,next){
    try{


        const url ='http://127.0.0.1:8000/request';
        const response = await axios.get(url);
        res.status(200).json({
            message:"Get Request Succeed!",
            data:response.data
        })

    }catch(err){
        next(err);

    }




}

module.exports={getRequest};

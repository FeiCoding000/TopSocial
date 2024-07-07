const axios=require('axios')
const getProfile=async function(req,res,next){
    try{

        const url='http://localhost:8000/profile';
        const response= await axios.get(url);
        console.log('response',response)
        res.status(200).json(
            {
                message:"Get profile succeed",
                data: response.data
            }
        )

    }catch(error){
        next(error)
    }



    console.log('Profile is requested!')
};



module.exports={getProfile};
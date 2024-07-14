import { getPath } from "@/js/database/utils.js";
import axios from "axios";


const fetchData = async (endpoint)=>{
    try{
        const respond=await axios.get(endpoint);
        return  respond.data;
    }
    catch(err){
        console.log(err);
    }
}



export const getDatabase =async function(){
    const [cards, profile, highline, message, request]= await Promise.all(
        [
            fetchData(getPath('cards')),
            fetchData(getPath('profile')),
            fetchData(getPath('highline')),
            fetchData(getPath('message')),
            fetchData(getPath('request'))
        ]
    );
    console.log('data',cards, profile, highline, message, request)
    return {cards, profile, highline, message, request};
}

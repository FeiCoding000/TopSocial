import "./index.css";
import { getDatabase } from "@/js/database/database.js";
// import { getPath } from '@/js/database/utils.js';
import { setMainLeftProfileImage } from "@/js/main/main-left.js";
import { setRightCornerImage } from "@/js/nav/nav";
import { 
    setMidHighLineImg, 
    setMidProfileImg, 
    popupListener, 
    setMidPostHolder, 
    generateMidPostList, 
    setProfileBoarderColor,
    randomPickImage
 } from "@/js/main/main-mid.js";

// const path=getPath();
// console.log(path);
// getDatabase();

const { cards, profile, highline, message, request } = await getDatabase();
console.log("cards", cards);
console.log("profile", profile);
console.log("highline", highline);
console.log("message", message);
console.log("request", request);

//nav
setRightCornerImage(profile);

//main-left
setMainLeftProfileImage(profile);

//main-mid
setMidHighLineImg();
setMidProfileImg();

//mid popup
popupListener();
//thought post area
setMidPostHolder(profile);
//mid post
generateMidPostList(cards);

//get color code

setProfileBoarderColor();

randomPickImage(); 


//main-right

export const setMidHighLineImg = () => {


    document.querySelectorAll(".main-mid-card.popup-trigger > img").forEach((item, index) => {
        item.src=`//ik.imagekit.io/fangweij/highline/highline_${index + 1}.webp`;
        console.log('item',item)
    }
    )
}


export const setMidProfileImg = () => {
    document.querySelectorAll(".main-mid-card.popup-trigger > .profile-photo > img").forEach((item, index) => {
        item.src=`//ik.imagekit.io/fangweij/profile/profile_${index + 1}.webp`;
        console.log('item',item)
    }
    )
}
    

//popup listener



    


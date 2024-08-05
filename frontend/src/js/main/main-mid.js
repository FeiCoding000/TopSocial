export const setMidHighLineImg = () => {
  document
    .querySelectorAll(".main-mid-card.popup-trigger > img")
    .forEach((item, index) => {
      item.src = `//ik.imagekit.io/fangweij/highline/highline_${
        index + 1
      }.webp`;
      console.log("item", item);
    });
};

export const setMidProfileImg = () => {
  document
    .querySelectorAll(".main-mid-card.popup-trigger > .profile-photo > img")
    .forEach((item, index) => {
      item.src = `//ik.imagekit.io/fangweij/profile/profile_${index + 1}.webp`;
      console.log("item", item);
    });
};

//popup listener
export const popupListener = () => {
  const figures = document.querySelectorAll(".popup-trigger");
  const popups = document.querySelectorAll(".popup");
  console.log("list", figures, popups);

  figures.forEach((figure, index) => {
    figure.addEventListener("click", () => {
      popups[index].style.display = "flex";
    });
  });
  const closeButtons = document.querySelectorAll(".popup-close");
  closeButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      popups[index].style.display = "none";
    });
  });
};

//mid post holder
export const setMidPostHolder = (posterName) => {
  document
    .querySelector(".main-mid-thought-wrapper input")
    .placeholder =`What's on your mind, ${posterName.name}?`
};

//generate posts
export const generateMidPostList = (cards) =>{
  const postList =document.querySelector(".main-mid-post-wrapper")
  cards.forEach((value,index) => {
    const newArticlePost = document.createElement("article");
    newArticlePost.innerHTML=`
            <div class="info-profile">
              <div class="profile">
                <div class="profile-photo">
                  <img alt="profile-photo" src=${value.profile.src} loading="lazy" />
                </div>
                <div class="profile-description">
                  <h2>${value.profile.name}</h2>
                  <p>${value.profile.position}, ${value.profile.time}</p>
                </div>
              </div>
            </div>
            <div class="info-picture">
              <img src=${value.picture.img_src} alt="post image" width="100%">
            </div>
            <div class="info-comment">
              <div class="profile-photo-list">
                <img src=${value.comment.img_src_list[0]} class="profile-photo" alt="profile-photo" loading="lazy">
                <img src=${value.comment.img_src_list[1]} class="profile-photo" alt="profile-photo" loading="lazy">
                <img src=${value.comment.img_src_list[2]} class="profile-photo" alt="profile-photo" loading="lazy">
                <span class="like-info">Liked by <strong>${value.comment.first_people_name}</strong> and <strong>${value.comment.like_peoples_number}</strong>others</span>
              </div>
              
              <span class="comment-info">${value.comment.comment_info}</span>
              <span class="view-btn">View all ${value.comment.view_number}comments</span>
            </div>
    `;
    postList.appendChild(newArticlePost);

  })
};

//set board color
//generate random color
export const getRandomColor = () => {
  let color = "#";
  for(let i = 0; i<6; i++){
    const str = "0123456789ABCDEF";
    color+=str[Math.floor(Math.random()*16)];
  }
  return color;
}
export const setProfileBoarderColor = () => {
  const boarders = document.querySelectorAll(".main-mid-post-wrapper .profile-photo");
  boarders.forEach( (item)=>{
    const borderColor = getRandomColor()
    item.style.borderColor=borderColor;
  })
};

//set random pics
const images = [
  "//ik.imagekit.io/fangweij/highline/highline_1.webp",
  "//ik.imagekit.io/fangweij/highline/highline_2.webp",
  "//ik.imagekit.io/fangweij/highline/highline_3.webp",
  "//ik.imagekit.io/fangweij/highline/highline_4.webp",
  "//ik.imagekit.io/fangweij/highline/highline_5.webp",
  "//ik.imagekit.io/fangweij/highline/highline_6.webp",
  "//ik.imagekit.io/fangweij/highline/highline_7.webp",
  "//ik.imagekit.io/fangweij/highline/highline_8.webp",
];
const images2 = [
  "//ik.imagekit.io/fangweij/profile/profile_1.webp",
  "//ik.imagekit.io/fangweij/profile/profile_2.webp",
  "//ik.imagekit.io/fangweij/profile/profile_3.webp",
  "//ik.imagekit.io/fangweij/profile/profile_4.webp",
  "//ik.imagekit.io/fangweij/profile/profile_5.webp",
  "//ik.imagekit.io/fangweij/profile/profile_6.webp",
  "//ik.imagekit.io/fangweij/profile/profile_7.webp",
  "//ik.imagekit.io/fangweij/profile/profile_8.webp",
  "//ik.imagekit.io/fangweij/profile/profile_9.webp",
  "//ik.imagekit.io/fangweij/profile/profile_10.webp",
  "//ik.imagekit.io/fangweij/profile/profile_11.webp",
  "//ik.imagekit.io/fangweij/profile/profile_12.webp",
  "//ik.imagekit.io/fangweij/profile/profile_13.webp",
  "//ik.imagekit.io/fangweij/profile/profile_14.webp",
  "//ik.imagekit.io/fangweij/profile/profile_15.webp",
  "//ik.imagekit.io/fangweij/profile/profile_16.webp",
  "//ik.imagekit.io/fangweij/profile/profile_17.webp",
];
const images3 = [
  "//ik.imagekit.io/fangweij/post/post_1.webp",
  "//ik.imagekit.io/fangweij/post/post_2.webp",
  "//ik.imagekit.io/fangweij/post/post_3.webp",
  "//ik.imagekit.io/fangweij/post/post_4.webp",
  "//ik.imagekit.io/fangweij/post/post_5.webp",
  "//ik.imagekit.io/fangweij/post/post_6.webp",
  "//ik.imagekit.io/fangweij/post/post_7.webp",
  "//ik.imagekit.io/fangweij/post/post_8.webp",
  "//ik.imagekit.io/fangweij/post/post_9.webp",
  "//ik.imagekit.io/fangweij/post/post_10.webp",
  "//ik.imagekit.io/fangweij/post/post_11.webp",
];

function shuffleArray (array){
  for (let i = array.length-1; i>0; i-- ){
    const j = Math.floor(Math.random()*(i+1));
    [array[i],array[j]]=[array[j],array[i]];
  };
  return array;

}

const setRandomImg = () => {
  const shuffleImages = shuffleArray(images);
  const seletedImages = shuffleImages.slice(0,6);

  const shuffleImages2 = shuffleArray(images2);
  const seletedImages2 = shuffleImages2.slice(0,6);

  const shuffleImages3 = shuffleArray(images3);
  const seletedImages3 = shuffleImages3.slice(0,6);

  const cardImages = document.querySelectorAll(".main-mid-card>img");
  cardImages.forEach((item,index)=>{item.src=seletedImages[index]});

  const profileImages = document.querySelectorAll(".main-mid-card> .profile-photo >img");
  profileImages.forEach((item,index)=>{item.src=seletedImages2[index]});

  const postImages = document.querySelectorAll(".info-picture >img");
  postImages.forEach((item,index)=>{item.src=seletedImages3[index]});

}
export const randomPickImage = () => setInterval(() => setRandomImg(), 6000);

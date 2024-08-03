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

export const setMainLeftProfileImage = (profile) =>
  (document.querySelector(".main-left .profile-photo > img").src=
    profile.img_src);

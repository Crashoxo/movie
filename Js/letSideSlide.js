const navBar = document.querySelector(".nav-bar");
// console.log(navBar);

const slideshow = document.querySelector(".slideshow");
// console.log(slideshow);

const showYoutube = document.querySelector(".show-youtube-outside");
// console.log(showYoutube);

const featuredMovie = document.querySelector(".featured-movie");
// console.log(featuredMovie);

const actorTitle = document.querySelector(".actor-title");
// console.log(actorTitle);

const actorPhoto = document.querySelector(".actor-context-photo");
// console.log(actorPhoto);

const actorName = document.querySelector(".actor-context-name");
// console.log(actorName);

const footer = document.querySelector("footer");
// console.log(footer);

export const allDomArray = [
  navBar,
  slideshow,
  showYoutube,
  featuredMovie,
  actorTitle,
  actorPhoto,
  actorName,
  footer,
];

export function checkEvent(e){
  console.log("抓監聽",e); // target > checked
 
}

export function changeStatus(){
 document.querySelector("#side-menu-switch").checked = false;
}



// document.querySelector("#side-menu-switch").addEventListener("click", checkEvent);
// allDomArray.forEach(function (item, index) {
//   item = item.addEventListener("click", changeStatus);
// });
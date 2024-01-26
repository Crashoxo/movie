// slide button
const getDom = document.querySelectorAll(".slideshow-background-button");
// 抓表頭判斷路徑
const path = document.querySelector("title").innerText;
// 藉由路徑名稱判斷要載入的背景圖片
let BgImages = [
  `image/${path}/001.jpg`,
  `image/${path}/002.jpg`,
  `image/${path}/003.jpg`,
  `image/${path}/004.jpg`,
  `image/${path}/005.jpg`,
];
let BgIndex = 0;

// 點擊右方按鈕時，關閉自動輪播
// 改為由點擊處開始自動輪播
export function backgroundImg(buttonIndex) {
  BgIndex = buttonIndex;
  // 清除全部
  getDom.forEach((item) => {
    item.classList.remove("active");
  });
  // 增加點選的樣式
  getDom[buttonIndex].classList.add("active");

  // 選擇 slideshow 元素
  let slideshow = document.querySelector(".slideshow");

  // 更換背景圖片
  slideshow.style.backgroundImage = `url(${BgImages[buttonIndex]})`;

  // 選擇所有的按鈕
  let buttons = document.querySelectorAll(".slideshow-background-button");

  // 移除所有按鈕的 active class
  buttons.forEach((btn) => btn.classList.remove("active"));

  // 為被點擊的按鈕添加 active class
  buttons[buttonIndex].classList.add("active");
}

export function changeBackgroundImage() {
  document.querySelector(".slideshow").style.backgroundImage = `url(${BgImages[BgIndex]})`;
  // 選擇所有的按鈕
  getDom.forEach((item) => {
    item.classList.remove("active");
  });
  getDom[BgIndex].classList.add("active");
  
  BgIndex = (BgIndex + 1) % BgImages.length; // 循環圖片
}

// 每3秒更換一次背景圖片
let intervalId = setInterval(changeBackgroundImage, 3000);

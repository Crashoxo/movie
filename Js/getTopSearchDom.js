import { suggestions } from "./suggestions.js";

// getting all required elements
const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const icon = searchWrapper.querySelector(".icon");
let linkTag = searchWrapper.querySelector("a");
let webLink;

// if user press any key and release
export function topRelease(e) {
  // console.log(e);
  let userData = e.target.value; // 輸入值
  let emptyArray = [];

  if (userData) {
    let path = pathChange(userData);
    // 點擊事件
    icon.onclick = () => {
      // webLink = `https://www.google.com/search?q=${userData}`;
      webLink = `./${path}.html`;
      linkTag.setAttribute("href", webLink);
      linkTag.click(); // 執行
    };

    // 如果有符合suggestions
    emptyArray = suggestions.filter((data) => {
      // filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
      // filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
      // 資料轉小寫 == 輸入資料的開頭小寫
      // startsWith T or F
      return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
    });

    // 製作li樣式
    emptyArray = emptyArray.map((data) => {
      // passing return data inside li tag
      return (data = `<li>${data}</li>`);
    });

    searchWrapper.classList.add("active"); // 顯示搜尋建議選單
    showTopSuggestions(emptyArray); // 列表
    let allList = suggBox.querySelectorAll("li"); // []
    for (let i = 0; i < allList.length; i++) {
      //adding onclick attribute in all li tag
      // allList[i].setAttribute("onclick", "sideSelect(this)");
      allList[i].addEventListener("click", topSelect);
    }
  } else {
    searchWrapper.classList.remove("active"); // 隱藏選單樣式
  }
}

// 選擇的li
function topSelect(element) {
  let selectData = element.target.innerText; //選擇的內文
  inputBox.value = selectData;
  icon.onclick = () => {
    // webLink = `https://www.google.com/search?q=${selectData}`;
    let path = pathChange(selectData);
    webLink = `./${path}.html`;
    linkTag.setAttribute("href", webLink);
    linkTag.click();
  };
  searchWrapper.classList.remove("active");
}

// 顯示列表
function showTopSuggestions(list) {
  let listData;
  if (!list.length) {
    // let userValue = inputBox.value;
    listData = `<li>查無此電影</li>`;
  } else {
    listData = list.join("");
  }
  suggBox.innerHTML = listData;
}

function pathChange(key) {
  let result = ""; // 送出去 自定義即可
  switch (key) {
    case "Big Hero 6":
    case "大英雄天團":
      result = `BigHero6`;
      break;
    case "天外奇蹟":
    case "UP":
      result = `Up`;
      break;
    case "靈魂急轉彎":
    case "Soul":
      result = `Soul`;
      break;
    case "羅根":
    case "Logan":
      result = `Logan`;
      break;
    case "腦筋急轉彎":
    case "Inside Out":
      result = `InsideOut`;
      break;
    default:
      result = `notFind`;
  }
  return result;
}

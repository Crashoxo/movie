import { suggestions } from "./suggestions.js";

// getting all required elements
const searchSideWrapper = document.querySelector(".side-search-input");
const inputSideBox = searchSideWrapper.querySelector("input");
const suggSideBox = searchSideWrapper.querySelector(".side-autocom-box");
const sideIcon = searchSideWrapper.querySelector(".icon");
let linkSideIconTag = searchSideWrapper.querySelector("a");
let webSideIconLink;

// if user press any key and release
export function sideRelease(e) {
  let userData = e.target.value; //user enetered data
  let emptyArray = [];

  if (userData) {
    let path = pathChange(userData);
    console.log(path);
    // 沒有搜尋到的
    sideIcon.onclick = () => {
      // webLink = `https://www.google.com/search?q=${userData}`;
      webSideIconLink = `./${path}.html`;
      linkSideIconTag.setAttribute("href", webSideIconLink);
      linkSideIconTag.click(); // 執行
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

    searchSideWrapper.classList.add("active"); //show autocomplete box

    showSideSuggestions(emptyArray);

    let allList = suggSideBox.querySelectorAll("li");
    for (let i = 0; i < allList.length; i++) {
      //adding onclick attribute in all li tag
      // allList[i].setAttribute("onclick", "sideSelect(this)");
      allList[i].addEventListener("click", sideSelect);
    }
  } else {
    searchSideWrapper.classList.remove("active"); //hide autocomplete box
  }
}

// 選擇的li
function sideSelect(element) {
  let selectData = element.target.innerText;
  inputSideBox.value = selectData;
  sideIcon.onclick = () => {
    // webLink = `https://www.google.com/search?q=${userData}`;
    let path = pathChange(selectData);
    webSideIconLink = `./${path}.html`;
    linkSideIconTag.setAttribute("href", webSideIconLink);
    linkSideIconTag.click(); // 執行
  };
  searchSideWrapper.classList.remove("active");
}

// 顯示列表
function showSideSuggestions(list) {
  let listData;
  if (!list.length) {
    // let userValue = inputSideBox.value;
    listData = `<li>查無此電影</li>`;
  } else {
    listData = list.join("");
  }
  suggSideBox.innerHTML = listData;
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

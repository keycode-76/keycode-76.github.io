import "./style.css";
import "./font.css";
export function alertScreen(windows) {
let alertScreen = document.createElement("div");
let alertImg = document.createElement("img");
let alertH3 = document.createElement("h3");
let alertPre = document.createElement("pre");
let alertBtn = document.createElement("button");

alertScreen.classList = "alertScreen";
alertBtn.id = "alertBtn";
alertImg.src = "./assets/img/0.alert/photo.png"; //img
alertH3.textContent = "Hello !";
alertPre.textContent = 
`This is a computer desktop simulator made with HTML5. 
I've set up the entire project as an open-source on GitHub.
In addition to JavaScript, HTML, and CSS,
the project also incorporates Node.js and webpack for modularization.

Added two new features:
  1. Timer
  2. To-do list

The content will be updated further, so stay tuned!
For more information, check out the "About" app on the desktop.
`
// `這是一個電腦桌面模擬器 由HTML5製作
// 全部內容 我都設定成開源項目 放在github上
// 除了Javascript, html, css之外 本項目還有導入
// Node.js的webpack來進行模組化

// *新增兩種新功能
// 1. 計時器
// 2. 代辦事項清單: 標註我接下來優先處理的項目

// 內容還會再更新 進請期待 !
// 更多訊息 都在桌面的about項目裡
// `
alertBtn.textContent = "OK"
alertScreen.append(alertImg, alertH3, alertPre, alertBtn);
document.querySelector(".window").appendChild(alertScreen);
const Modal = {
    show: function() {
      alertScreen.style.display = "block";
    },
  
    close: function() {
      alertScreen.style.display = "none";
    },
  
    init: function() {
      alertBtn.addEventListener("click", () => {
        this.close();
      });
    }
  };
  
  Modal.init();
  return windows.append(alertScreen);
}
(function () {
  'use strict';

  function alertScreen(windows) {
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
`;
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
  alertBtn.textContent = "OK";
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

  let gitLinkmg = "./assets/img/1.about/link-github.png"; //img
  let igLinkImg = "./assets/img/1.about/link-ig.png";

  let int = 
`I'm a front-end engineer,
living in Taipei, Taiwan.
I'm passionate about 
simulation games.
Currently on the lookout for 
job opportunities related to 
game development.
Feel free to reach out.
Also, I'm working on a small game 
called "Typing Work".
`  ;
  let list1 = `Programming Languages: JavaScript, HTML, CSS, gdScript`;
  let list2 = `Game Engine: Godot`;
  let list3 = `Frameworks: React, Vue`;
  let list4 = `Server: Node.js`;
  let list5 = `Belief: Everything can be turned into a game`;

  let titleText = "About Me";
  let copyRightText = "This website is developed using HTML5.";
  // `是一位前端工程師新手
  // 居住在台灣的台北
  // 熱愛模擬類型和劇情類型遊戲
  // 最近在尋找工作
  // 任何遊戲工程
  // 相關職缺請積極聯繫我
  // 以及目前在製作小遊戲
  // "Typing Work"
  // `;
  // let list1 = `程式語言 : JavaScript HTML Css gdScript`;
  // let list2 = `遊戲引擎 : Godot `;
  // let list3 = `框架 :  React Vue`;
  // let list4 = `服務器 : Node.js`;
  // let list5 = `Belive : 所有的事情都可以變成遊戲`;

  // let titleText = "About Me";
  // let copyRightText = "本網頁使用HTML5開發";

  function about(windows) {
      let screen = document.createElement('div');
      let leftScreen = document.createElement('div');
      let rightScreen = document.createElement('div');
      let sprite = document.createElement('div');
      let iconBox = document.createElement('div');
      let linkMail = document.createElement('a');
      let linkGit = document.createElement('a');
      let linkIg = document.createElement('a');
      let imgLabel = document.createElement('label');
      let imgGit = document.createElement('img');
      let imgIg = document.createElement('img');
      let h3 = document.createElement('h3');
      let intro = document.createElement('pre');
      let copyRight = document.createElement('label');

      let ul = document.createElement('ul');
      let li1 = document.createElement('li');
      let li2 = document.createElement('li');
      let li3 = document.createElement('li');
      let li4 = document.createElement('li');
      let li5 = document.createElement('li');
      h3.textContent = titleText;
      intro.textContent = int;
      li1.textContent = list1;
      li2.textContent = list2;
      li3.textContent = list3;
      li4.textContent = list4;
      li5.textContent = list5;

      sprite.classList.add('sprite'); //img
      iconBox.classList.add('iconBox');
      linkMail.classList.add('mail');
      copyRight.classList.add('copyRight');
      imgGit.src = gitLinkmg;
      imgIg.src = igLinkImg;
      linkGit.href = "https://github.com/keycode-76/";
      linkIg.href = "https://www.instagram.com/keycode76/";
      linkMail.href = "mailto:leeerh98@gmail.com";
      linkMail.textContent = "leeerh98@gmail.com";
      imgLabel.textContent = "contect link";
      copyRight.textContent = copyRightText;
      screen.classList = 'screen';
      leftScreen.classList.add('leftScreen');
      rightScreen.classList.add('rightScreen');
      linkGit.append(imgGit);
      linkIg.append(imgIg);
      iconBox.append(linkGit, linkIg, imgLabel);
      ul.append(li1, li2, li3, li4, li5);
      leftScreen.append(h3, intro, );
      let linkBox = document.createElement("div");
      linkBox.classList = "linkBox";
      linkBox.append(linkMail, iconBox);
      rightScreen.append(sprite, linkBox);
      screen.append(leftScreen, rightScreen);
      let more = document.createElement("div");
      more.id = "toDoList";
      more.classList = "scrollbar";
      more.append(screen, ul, copyRight);
      return windows.children[0].append(more);
  }

  function toDoList(windows) {  
  let todoImg = "./assets/img/2.toDoList/photo-1.png"; //img
  let todos = [
      {
        title: "Build Typing Game",
        content: "the next project, build with Javascript",
        color: "white",
        isCompleted: false
      }
    ];
    let userInput = document.createElement("div");
    userInput.classList.add("userInput", "scrollbar");
    let title = document.createElement("input");
    title.classList = "title";
    title.type ="text";
    title.placeholder ="title";
    let content = document.createElement("textarea");
    content.classList = "content";
    content.placeholder="content";
    let userSelect = document.createElement("select");
    userSelect.classList = "userSelect";
    let option1 = document.createElement("option");
    let option2 = document.createElement("option");
    let option3 = document.createElement("option");
    option1.value="white";
    option2.value="lightGray";
    option3.value="darkGray";
    option1.textContent="white";
    option2.textContent="lightGray";
    option3.textContent="darkGray";
    userSelect.append(option1, option2, option3);
    let addBtn = document.createElement("button");
    let exportBtn = document.createElement("button");
    let saveBtn = document.createElement("button");
    
    addBtn.addEventListener("click", addNote);
    exportBtn.addEventListener("click", exportList);
    saveBtn.addEventListener("click", saveList);

    addBtn.textContent="add";
    exportBtn.textContent="export";
    saveBtn.textContent="save";
    let notes = document.createElement('div');
    addBtn.classList = "addBtn";
    notes.classList = "notes";
    userInput.append( title, content, addBtn, notes);

    function render() {
      notes.textContent = "";
      for (const todo of todos) {
        let note = document.createElement('div');
        let noteImg = document.createElement('img');
        let noteH3 = document.createElement('h3');
        let span = document.createElement('p');
        let completedBtn = document.createElement('button');
        let deletBtn = document.createElement('button');
        let completedLabel = document.createElement('label');
    
        note.classList = "note";
        noteH3.classList = "noteH3";
        completedBtn.classList = "completedBtn";
        noteImg.src = todoImg;
        noteH3.textContent = todo.title;
        span.textContent = todo.content;
        deletBtn.textContent ="x";
        completedBtn.textContent = todo.isCompleted ? "[ completed ]" : "[ not yet ]";
        completedLabel.textContent = "checked!";
        completedLabel.style.display = todo.isCompleted ? "inline" : "none";
    
        notes.appendChild(note);
        note.append(noteImg, noteH3, span);

        if (todo.color === "white") {
          note.style.backgroundColor = 'white';
        } else if (todo.color === "lightGray") {
          note.style.backgroundColor = 'lightGray';
        } else if (todo.color === "darkGray") {
          note.style.backgroundColor = 'darkGray';
        }
    
        deletBtn.onclick = () => {
          todos.splice(todos.indexOf(todo), 1);
          render();
        };
    
        completedBtn.onclick = () => {
          todo.isCompleted = !todo.isCompleted;
          render();
        };
      }
    }
    
    render();
    
    function addNote() {
      
      let newInput = {
        title: title.value,
        content: content.value,
        color: userSelect.value,
        isCompleted: false
      };
      console.log(title.value);
      todos.push(newInput);
      render();
    }
    
    function exportList() {
      let arr = [];
      for (const todo of todos) {
        let star = todo.color === "lightGray" ? "*" : (todo.color === "gray" ? "**" : "");
        arr.push(` ${star}${todo.title}${star}`);
      }
      alert(`to do list: ${arr}`);
    }
    
    function saveList() {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
    
    if (localStorage.getItem("todos")) {
      todos = JSON.parse(localStorage.getItem("todos"));
      render();
    }
    

    return windows.children[1].append(userInput);
  }

  function behindTheScenes(windows) {
      let screen = document.createElement("div");
      let sketchImg = document.createElement("img");
      screen.id = "behindTheScenes";
      sketchImg.src = "./assets/img/3.behindTheScenes/photo-sketch.jpg"; //img
      screen.append(sketchImg);
      return windows.children[2].appendChild(screen);
  }

  function stopWatch(windows, bar) {

    let container = document.createElement("div");
    container.classList.add("container");
    let display = document.createElement("div");
    display.id = "display";
    display.textContent = "00:00:00:00";
    let startTime = document.createElement("button");
    let stopTime = document.createElement("button");
    let resetTime = document.createElement("button");
    startTime.id = "startStopwatch";
    stopTime.id = " stopStopwatch";
    resetTime.id = "resetStopwatch";
    startTime.textContent = "start";
    stopTime.textContent = " stop";
    resetTime.textContent = "reset";
    container.append(display, startTime, stopTime, resetTime);
    
    let clockTime = document.createElement("div");
    clockTime.classList.add("clock");
    let clockDisplay = document.createElement("div");
    clockDisplay.classList.add("clock-display");
    clockDisplay.id = "clockDisplay";
    clockDisplay.textContent = "Loading...";
    clockTime.append(clockDisplay);

  (() => {//stopWatch
    let timer, 
    isRunning = false, 
    milliseconds = 0, seconds = 0, 
    minutes = 0, 
    hours = 0;

    const displayTime = () => { //textContent = time
      document.getElementById('display').innerHTML = 
      `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(2, '0')}`;
    };
    const startStopwatch = () => {//time running
      if (isRunning) return;// run true return
      timer = setInterval(() => {
        milliseconds++;
        if (milliseconds === 1000) {
          milliseconds = 0;
          seconds++;
          if (seconds === 60) {
            seconds = 0;
            minutes++;
            if (minutes === 60) {
              minutes = 0;
              hours++;
            }
          }
        }
        displayTime();
      }, 1);
      isRunning = true;
    };

    const stopStopwatch = () => {
      clearInterval(timer);
      isRunning = false;
    };

    const resetStopwatch = () => {
      clearInterval(timer);
      milliseconds = seconds = minutes = hours = 0;
      displayTime();
      isRunning = false;
    };

    startTime.addEventListener('click', startStopwatch);
    stopTime.addEventListener('click', stopStopwatch);
    resetTime.addEventListener('click', resetStopwatch);

    return { startTime, stopTime, resetTime };
  })();

  (() => {// clock
    const updateClock = () => {
      const now = new Date();
      const options = { hour: 'numeric', minute: 'numeric', hour12: true };
      clockDisplay.textContent = now.toLocaleTimeString('en-US', options);
    };
    setInterval(updateClock, 1000);
    updateClock();
  })();
  bar.append(clockTime);
  return windows.children[4].append(container);
  }

  let apps = [{
      name: "About",
      location: ".desktop",
      appBtn: [
          `./assets/img/main/app-about-0.png`,
          `./assets/img/main/app-about-1.png`
      ],
      open: true,
      width: "540px",
      height: "400px",
      top: "160px",
      left: "260px",
  },
  {
      name: "To Do List",
      location: ".desktop",
      appBtn: [
          `./assets/img/main/app-toDoList-0.png`,
          `./assets/img/main/app-toDoList-1.png`
      ],
      open: false,
      width: "280px",
      height: "500px",
      top: "80px",
      left: "650px",
  },
  {
      name: "Behind The Scenes",
      location: ".desktop",
      appBtn: [
          `./assets/img/main/app-behindTheScenes-0.png`,
          `./assets/img/main/app-behindTheScenes-1.png`
          
      ],
      open: false,
      width: "650px",
      height: "500px",
      top: "70px",
      left: "150px",
  },
  {
      name: "PortFolios",
      location: ".desktop",
      appBtn: [
          `./assets/img/main/app-file-0.png`,
          `./assets/img/main/app-file-1.png`
      ],
      open: false,
      width: "250px",
      height: "200px",
      top: "40px",
      left: "195px",
  },
  {
      name: "Timer",
      location: "#PortFolios",
      appBtn: [
          `./assets/img/main/app-clock-0.png`,
          `./assets/img/main/app-clock-1.png`
      ],
      open: false,
      width: "300px",
      height: "200px",
      top: "500px",
      left: "550px",
  }
  ];
  let btnImg = ["./assets/img/main/btn-close-0.png","./assets/img/main/btn-close-1.png"];

  const bar = document.querySelector('.bar');
  const border = document.querySelector('.border');
  document.querySelector('.desktop'); 
  const windows = document.querySelector('.windows');

  const render = () => {
      apps.forEach(app => {
          const appDiv = document.createElement('div');
          const appBtn = document.createElement('input'); //app button

          const appWindow = document.createElement('div'); // window
          const header = document.createElement('header');
          const winXBtn = document.createElement('input');

          appDiv.classList = "appDiv";
          appBtn.classList = "appBtn";
          appWindow.classList = "window";
          winXBtn.classList = "winBtn";
          
          appWindow.style.width = app.width;
          appWindow.style.height = app.height;
          appWindow.style.top = app.top;
          appWindow.style.left = app.left;
          appWindow.id = app.name;
          winXBtn.type = "image";
          winXBtn.src = btnImg[0];

          windows.appendChild(appWindow);
          appDiv.append(appBtn, app.name);
          appWindow.append(header, winXBtn);
          document.querySelector(app.location).appendChild(appDiv);

          appBtn.type ="image";
          appBtn.width ="70";
          appBtn.src = app.appBtn[0];
          
          app.open ? open(app, appBtn, appWindow) : closeWindow(winXBtn, appWindow);
          appBtn.addEventListener('click', () => { //open window
              openWindow(app, appBtn, appWindow);
          });
          winXBtn.addEventListener('click', () => { //close window
              closeWindow(winXBtn, appWindow);
          });  
          header.addEventListener("mousedown", () => { //drag 
              dragItem(header);
              currentWindow(appWindow);
          });
          document.addEventListener("mouseup", () => { //drop
              dropItem();
          });
  });};
  const openWindow = (app, appBtn, appWindow) => { //open window
      appBtn.src = app.appBtn[1];
      setTimeout(() => {
          appBtn.src = app.appBtn[0];
          appWindow.style.display = "inline-block"; }, 300);
  };
  const closeWindow = (winXBtn, appWindow) => {
      winXBtn.src = btnImg[1];
      setTimeout(() => { 
          winXBtn.src = btnImg[0];
          appWindow.style.display = "none"; }, 300);
  };
  function onDrag(event) {
      let item = event.target.parentNode;
      let movementX = event.movementX;
      let movementY = event.movementY;
      let getStyle = window.getComputedStyle(item);
      let x = parseInt(getStyle.left) + movementX;
      let y = parseInt(getStyle.top) + movementY;
      x = Math.max(0, Math.min(x, border.offsetWidth - item.offsetWidth)); 
      y = Math.max(0, Math.min(y,  border.offsetHeight - item.offsetHeight));
      item.style.left = x + 'px';
      item.style.top = y + 'px';
  }
  const dragItem = (header, winXBtn) => { // click header
      let item = event.target.parentNode;
      header.classList.add("active");
      item.classList.add("shadow");
      event.target.addEventListener("mousemove", onDrag);
  };
  const dropItem = (header) => { //drop
      for(let i of document.querySelectorAll('.active')){
          i.removeEventListener("mousemove", onDrag);
          i.classList.remove("active");
      }
      for(let i of document.querySelectorAll('.shadow')){
          i.classList.remove("shadow");
      }
  };
  const currentWindow = (appWindow) => {
      const current = document.querySelector('.current');
      if (current) {
          current.classList.remove('current'); }
      appWindow.classList.add('current');
      windows.appendChild(appWindow);
  };

  render();
  alertScreen(windows);
  about(windows);
  toDoList(windows);
  behindTheScenes(windows);
  stopWatch(windows, bar);

})();


import '../assets/css/font.css';
import '../assets/css/style.css';
import { alertScreen } from '../apps/0.alert/script.js';
import { about } from '../apps/1.about/script.js';
import { toDoList } from '../apps/2.toDoList/script.js';
import { behindTheScenes } from '../apps/3.behindTheScenes/script.js';
import { stopWatch } from '../apps/4.stopWatch/script.js';

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
let btnImg = ["./assets/img/main/btn-close-0.png","./assets/img/main/btn-close-1.png"]

const bar = document.querySelector('.bar');
const border = document.querySelector('.border');
const desktop = document.querySelector('.desktop'); 
const windows = document.querySelector('.windows');

const render = () => {
    apps.forEach(app => {
        const appDiv = document.createElement('div')
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
            dragItem(header, winXBtn);
            currentWindow(appWindow);
        });
        document.addEventListener("mouseup", () => { //drop
            dropItem(header);
        });
})}
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
    let item = event.target.parentNode
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
        i.classList.remove("shadow")
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
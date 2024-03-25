import './style.css';
import './font.css';

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
`;
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

export function about(windows) {
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
    li1.textContent = list1
    li2.textContent = list2
    li3.textContent = list3
    li4.textContent = list4
    li5.textContent = list5

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
    ul.append(li1, li2, li3, li4, li5)
    leftScreen.append(h3, intro, );
    let linkBox = document.createElement("div");
    linkBox.classList = "linkBox";
    linkBox.append(linkMail, iconBox)
    rightScreen.append(sprite, linkBox);
    screen.append(leftScreen, rightScreen);
    let more = document.createElement("div");
    more.id = "toDoList";
    more.classList = "scrollbar";
    more.append(screen, ul, copyRight);
    return windows.children[0].append(more);
}
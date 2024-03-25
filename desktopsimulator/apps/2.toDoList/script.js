import './style.css';
import './font.css';
export function toDoList(windows) {  
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
  userSelect.classList = "userSelect"
  let option1 = document.createElement("option");
  let option2 = document.createElement("option");
  let option3 = document.createElement("option");
  option1.value="white";
  option2.value="lightGray";
  option3.value="darkGray";
  option1.textContent="white";
  option2.textContent="lightGray";
  option3.textContent="darkGray";
  userSelect.append(option1, option2, option3)
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
  
      note.classList = "note"
      noteH3.classList = "noteH3"
      completedBtn.classList = "completedBtn";
      noteImg.src = todoImg;
      noteH3.textContent = todo.title;
      span.textContent = todo.content;
      deletBtn.textContent ="x"
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
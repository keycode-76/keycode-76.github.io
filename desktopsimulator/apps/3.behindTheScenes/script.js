import "./style.css";
export function behindTheScenes(windows) {
    let screen = document.createElement("div");
    let sketchImg = document.createElement("img");
    screen.id = "behindTheScenes";
    sketchImg.src = "./assets/img/3.behindTheScenes/photo-sketch.jpg"; //img
    screen.append(sketchImg);
    return windows.children[2].appendChild(screen);
}
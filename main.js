// main.js

import "/import/about.scss";
import "/import/style.scss";
import "/import/rwd.scss";


const next_btn = document.getElementById("next");
const prev_btn = document.getElementById("previous");
const slider_div = document.getElementById("slider");
const dots = document.getElementById("dots");
const imgCounts = slider_div.children.length-2;
function init() {
  dots.innerHTML = '';
  for (let i = 0; i < imgCounts; i++) {
    let li = document.createElement("li");
    dots.appendChild(li);
  }}
const slideProps = { index: 0 };
const slideHandler = {
  set(obj, prop, value) {
    if (prop === "index") {
      if (value < 0 || value >= imgCounts) return;
      dot_inactive();
      obj[prop] = value;
      calculateWidth();
      dot_active();
      return true;
    }
  },
};

const slideProxy = new Proxy(slideProps, slideHandler);
next_btn.addEventListener("click", () => slideProxy.index += 1);
prev_btn.addEventListener("click", () => slideProxy.index -= 1);
setClickEventToDots();

const debounce = (callbackFunction, delayTime = 100) => {
  let timerId;
  return (...functionArguments) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => callbackFunction.apply(this, functionArguments), delayTime);
  };
};
window.onresize = debounce(calculateWidth);

function calculateWidth() {
  const imgWidth = (slider_div.offsetWidth/3);
  slider_div.scrollLeft = slideProps.index * imgWidth;
  // 設置所有圖片的 opacity 為 0.5
  Array.from(slider_div.children).forEach(img => img.classList.remove('active'));
  slider_div.children[slideProps.index+1].classList.add('active');
}

function dot_inactive() {
  const index = slideProps.index;
  dots.children[index].classList.remove('dot--active');
}

function dot_active() {
  const index = slideProps.index;
  dots.children[index].classList.add('dot--active');
}

function setClickEventToDots() {
  dots.addEventListener('click', (event) => {
    const target = event.target.closest('li');
    if (target) {
      slideProxy.index = Array.from(dots.children).indexOf(target);
    }
  });
}

function autoSlide() {
  setInterval(() => {
    slideProxy.index = (slideProps.index + 1) % imgCounts;
  }, 5500); // 60000 毫秒等於 1 分鐘
}
init();
autoSlide();

const mobile_menu = document.querySelector(".mobile-menu");
let isOpen = false;

const toggleMenu = () => {
  if (!isOpen) {
    mobile_menu.classList.add("open");
  } else {
    mobile_menu.classList.remove("open");
  }
  isOpen = !isOpen;
};

const debouncedToggleMenu = debounce(toggleMenu, 300);
mobile_menu.addEventListener("click", debouncedToggleMenu);

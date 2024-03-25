import './style.css';
export function stopWatch(windows, bar) {

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
  container.append(display, startTime, stopTime, resetTime)
  
  let clockTime = document.createElement("div");
  clockTime.classList.add("clock");
  let clockDisplay = document.createElement("div");
  clockDisplay.classList.add("clock-display");
  clockDisplay.id = "clockDisplay";
  clockDisplay.textContent = "Loading..."
  clockTime.append(clockDisplay)

const stopwatch = (() => {//stopWatch
  let timer, 
  isRunning = false, 
  milliseconds = 0, seconds = 0, 
  minutes = 0, 
  hours = 0;

  const displayTime = () => { //textContent = time
    document.getElementById('display').innerHTML = 
    `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(2, '0')}`;
  }
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
  }

  const stopStopwatch = () => {
    clearInterval(timer);
    isRunning = false;
  }

  const resetStopwatch = () => {
    clearInterval(timer);
    milliseconds = seconds = minutes = hours = 0;
    displayTime();
    isRunning = false;
  }

  startTime.addEventListener('click', startStopwatch);
  stopTime.addEventListener('click', stopStopwatch);
  resetTime.addEventListener('click', resetStopwatch);

  return { startTime, stopTime, resetTime };
})();

const clock = (() => {// clock
  const updateClock = () => {
    const now = new Date();
    const options = { hour: 'numeric', minute: 'numeric', hour12: true };
    clockDisplay.textContent = now.toLocaleTimeString('en-US', options);
  }
  setInterval(updateClock, 1000);
  updateClock();
})();
bar.append(clockTime)
return windows.children[4].append(container);
}
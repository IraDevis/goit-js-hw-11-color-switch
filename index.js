const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
    start: document.querySelector('.js-start'),
    stop: document.querySelector('.js-stop'),
    body: document.querySelector('body')
}

refs.start.addEventListener('click', startChangeBgColor)
refs.stop.addEventListener('click', stopChangeBgColor)

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let isChangeBgColorStarting = false;
let intervalId = null;

function startChangeBgColor() {
    if (isChangeBgColorStarting) {
        return
    };
    refs.start.disabled = true;
    intervalId = setInterval(() => {
        refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)]
    }, 1000);
};

function stopChangeBgColor() {
    if (!startChangeBgColor) {
        return
    };
    refs.start.disabled = false;
    clearInterval(intervalId)
};
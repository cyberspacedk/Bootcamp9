"use strict";
/*
  Создайте скрипт секундомера.  
  По ссылке можно посмотреть пример выбрав Stopwatch http://www.online-stopwatch.com/full-screen-stopwatch/
  
  Изначально в HTML есть разметка:
  
  <div class="stopwatch">
    <p class="time js-time">00:00.0</p>
    <button class="btn js-start">Start</button>
    <button class="btn js-take-lap">Lap</button>
    <button class="btn js-reset">Reset</button>
  </div>
  <ul class="laps js-laps"></ul>
  
  Добавьте следующий функционал:
  
  - При нажатии на кнопку button.js-start, запускается таймер, который считает время 
    со старта и до текущего момента времени, обновляя содержимое элемента p.js-time 
    новым значение времени в формате xx:xx.x (минуты:секунды.сотни_миллисекунд).
       
    🔔 Подсказка: так как необходимо отображать только сотни миллисекунд, интервал
                  достаточно повторять не чаще чем 1 раз в 100 мс.
    
  - Когда секундомер запущен, текст кнопки button.js-start меняется на 'Pause', 
    а функционал при клике превращается в оставновку секундомера без сброса 
    значений времени.
    
    🔔 Подсказка: вам понадобится буль который описывает состояние таймера активен/неактивен.
  
  - Если секундомер находится в состоянии паузы, текст на кнопке button.js-start
    меняется на 'Continue'. При следующем клике в нее, продолжается отсчет времени, 
    а текст меняется на 'Pause'. То есть если во время нажатия 'Pause' прошло 6 секунд 
    со старта, при нажатии 'Continue' 10 секунд спустя, секундомер продолжит отсчет времени 
    с 6 секунд, а не с 16. 
    
    🔔 Подсказка: сохраните время секундомера на момент паузы и используйте его 
                  при рассчете текущего времени после возобновления таймера отнимая
                  это значение от времени запуска таймера.
    
  - Если секундомер находится в активном состоянии или в состоянии паузы, кнопка 
    button.js-reset должна быть активна (на нее можно кликнуть), в противном случае
    disabled. Функционал при клике - остановка таймера и сброс всех полей в исходное состояние.
    
  - Функционал кнопки button.js-take-lap при клике - сохранение текущего времени секундомера 
    в массив и добавление в ul.js-laps нового li с сохраненным временем в формате xx:xx.x
*/

//  ----------------------------------------------

const button = document.querySelector(".js-start");
const lap = document.querySelector(".js-take-lap");
const reset = document.querySelector(".js-reset");
let show = document.querySelector(".js-time");
const list = document.querySelector(".js-laps");

const t = {
  start: null,
  go: null,
  id: null,
  lap: []
};

button.addEventListener("click", () => {
  if (button.textContent === "Start") {
    button.textContent = "Pause";
    t.start = Date.now();
    t.id = setInterval(() => {
      t.go = Date.now() - t.start;
      displayTime(t.go);
    }, 100);
  }
  else if (button.textContent === "Pause") {
    button.textContent = "Continue";
    clearInterval(t.id);
  }
  else if (button.textContent === "Continue") {
    button.textContent = "Pause";
    t.start = Date.now() - t.go;
    t.id = setInterval(() => {
      t.go = Date.now() - t.start;
      displayTime(t.go);
    }, 100);
  }
});

lap.addEventListener("click", () => {
  if (!t.lap.includes(show.textContent)) {
    t.lap.push(show.textContent);
    list.innerHTML += `<li> ${show.textContent}</li>`;
  } else {
    alert("Such time already exist!");
  }
});

reset.addEventListener("click", () => {
  clearInterval(t.id);
  displayTime(0);
  list.innerHTML = "";
  button.textContent = "Start";
});

function displayTime(t) {
  let time = new Date(t);
  let min = time.getMinutes();
  let sec = time.getSeconds();
  let msec = Math.floor((time.getMilliseconds() % 1000) / 100);
  min < 10 ? (min = "0" + min) : min;
  sec < 10 ? (sec = "0" + sec) : sec;
  show.textContent = `${min} : ${sec} : ${msec}`;
}

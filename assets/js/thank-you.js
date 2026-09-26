const countdown = document.querySelector('#countdown');
let seconds = 3;

const timer = window.setInterval(() => {
  seconds -= 1;
  countdown.textContent = String(seconds);

  if (seconds <= 0) {
    window.clearInterval(timer);
    window.location.href = '../index.html';
  }
}, 1000);

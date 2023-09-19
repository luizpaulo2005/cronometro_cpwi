let isRunning = false;
let time = 0;

const element_clock = document.getElementById("relogio");
const startButton = document.getElementById("startButton");
const pauseButton = document.getElementById("pauseButton");
const resetButton = document.getElementById("resetButton");

const atualizarRelogio = () => {
  if (!isRunning) {
    return;
  }

  time += 1;

  let horas = Math.floor(time / 3600);
  let minutos = Math.floor((time % 3600) / 60);
  let segundosRestantes = time % 60;

  if (horas < 10) {
    horas = `0${horas}`;
  }

  if (minutos < 10) {
    minutos = `0${minutos}`;
  }

  if (segundosRestantes < 10) {
    segundosRestantes = `0${segundosRestantes}`;
  }

  element_clock.textContent = `${horas}:${minutos}:${segundosRestantes}`;
};

const iniciarRelogio = () => {
  isRunning = true;
  startButton.disabled = true;
  console.log("Iniciando contagem");
  return (comecarRelogio = setInterval(atualizarRelogio, 1000));
};

const pausarRelogio = () => {
  isRunning = false;
  startButton.disabled = false;
  clearInterval(comecarRelogio);
  console.log("Pausando contagem");
};

const pararRelogio = () => {
  isRunning = false;
  startButton.disabled = false;
  time = 0;
  console.log("Parando contagem");
  element_clock.textContent = "00:00:00";
};

startButton.addEventListener("click", iniciarRelogio);
pauseButton.addEventListener("click", pausarRelogio);
resetButton.addEventListener("click", pararRelogio);
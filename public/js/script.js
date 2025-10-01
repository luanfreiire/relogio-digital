// relogio digital //
function relogio() {
  const agora = new Date();
  const horas = agora.getHours().toString().padStart(2, "0");
  const minutos = agora.getMinutes().toString().padStart(2, "0");
  const segundos = agora.getSeconds().toString().padStart(2, "0");

  document.querySelector(
    "h1"
  ).textContent = `${horas} : ${minutos} : ${segundos}`;
}

relogio();
setInterval(relogio, 1000);

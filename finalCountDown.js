function finalCountDown() {
    const now = new Date();
    
    let objTime = new Date(now);
    objTime.setHours(2, 43, 0, 0);

    if (now > objTime) {
      objTime.setDate(objTime.getDate() + 1);
    }
    
    const diff = objTime - now;

    const horas = Math.floor(diff / 3600000);
    const minutos = Math.floor((diff % 3600000) / 60000);
    const segundos = Math.floor((diff % 60000) / 1000);
    
    const horaActual = now.toLocaleTimeString();
    
    return [horaActual, horas + ":" + minutos + ":" + segundos];
}
function createFinalscreen() {
    const body = document.querySelector("body");
    body.style.display = "flex";
    body.style.justifyContent = "center";
    body.style.alignItems = "center";
    const container = document.createElement("div");
    container.classList.add("fmsgc")
    body.appendChild(container);
    const showActTime = document.createElement("p");
    const showTimeLeft = document.createElement("p");
    const showFinalWarn = document.createElement("p");
    container.appendChild(showActTime);
    container.appendChild(showTimeLeft);
    container.appendChild(showFinalWarn);
    showActTime.classList.add("finalP");
    showTimeLeft.classList.add("finalP");
    showFinalWarn.classList.add("finalP");

    let interval = setInterval( () => {
        showActTime.textContent = finalCountDown()[0];
        showTimeLeft.textContent = "Te Quedan " + finalCountDown()[1];
        showFinalWarn.textContent = "Para Las 2:43 a. m."
    }, 1000);   
}

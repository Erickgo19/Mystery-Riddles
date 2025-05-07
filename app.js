const startScreen = document.querySelector(".start-screen");
const startBtn = document.querySelector("#start-button");
const bgMusic = document.querySelector("audio");
bgMusic.volume = 0.3;


let totalTime = 600;

startBtn.addEventListener("click", () => {
    startScreen.remove();
    bgMusic.play();
    countdown(totalTime)
    setTimeout(() =>  {
        storyLine();
    }, 3000)
});

function final() {
    createFinalscreen();
}

function countdown(leftTime) {

    function updateClock() {
        const mins = Math.floor(leftTime / 60).toString().padStart(2, '0');
        const secs = (leftTime % 60).toString().padStart(2, '0');
        const timeDisplay = mins + ":" + secs;

        const clock = document.querySelector("#clock");
        if (clock) {
           clock.textContent = timeDisplay;
        }

        if (leftTime > 0) {
            leftTime--;
        } else {
            const body = document.querySelector("body");
            body.style.backgroundColor = "#000"
            body.innerHTML = " ";
        }

        const alert = document.querySelector("#alert")
        if (leftTime >= 590) {
            alert.style.color = "#fff";
        } else {
            alert.style.opacity = "0";
        }
    }

    const countDown = setInterval(updateClock, 1000);
    updateClock();
}

const data = [
    {
        riddle: `
            ¿Qué se abre cuando no hay viento, se cierra sin advertencia,
            y deja entrar sin que nadie lo note?
        `,
        answer: ["la puerta", "una puerta", "puerta"],
        script: `
            Trabajo en una estación de servicio, en las afueras de la ciudad.
            De esas que están en mitad de la nada, con una sola carretera que,
            parece no ir a ningún lado. Tengo turno nocturno los fines de
            semana. En teoría es tranquilo. Nadie entra después de la 1:00 am,
            excepto algún que otro camionero buscando café, o alguien
            demasiado cansado, para seguir manejando.
            Hace unas semanas, algo raro empezó a pasar.
            Todo comenzó un viernes. Eran las 2:43 am, lo recuerdo bien porque,
            estaba mirando el reloj, esperando que dieran las 3 para salir a fumar.
            La puerta automática se abrió sola. No es raro cuando hay viento,
            pero esa noche no había ni una brisa. Me asomé por el mostrador y,
            no había nadie. Me acerqué miré afuera. Nada. Cerré la puerta
            manualmente y seguí con mi rutina.
        `
    },
    {
        riddle: `
            Tiene forma, pero no cuerpo. Lo ves, pero no te ve.
            Solo una te pertenece. ¿Qué es?
        `,
        answer: ["la sombra", "una sombra", "sombra"],
        script: `
            Al día siguiente, a la misma hora exacta, volvió a pasar.
            Esta vez al mirar hacia la entrada, vi a un hombre parado,
            al borde del estacionamiento. No se movía solo estaba ahí.
            Usaba una gorra y la visera baja, parecía mirar directamente
            hacia el local. No hizo ademán de entrar. Después de unos segundos,
            desapareció caminando hacia el campo, al costado de la carretera.
            No lo vi más.
            Pensé que quizás, estaba esperando a que lo recogieran,
            pero nadie vino. A esa hora ni siquiera hay señal, de celular en esa zona. .
            Empecé a fijarme en, los registros de la cámara de seguridad.
            Y ahí, fue donde todo se volvió más raro.
            En los videos, la puerta sí se abre, pero no entra nadie.
            Y en la grabación de la segunda noche, no hay rastro del hombre.
            Yo lo vi Lo juro. Pero la cámara, no captó a nadie parado ahí afuera.
        `
    },
    {
        riddle: `
            ¿Qué es en lo que crees, aunque la razón lo rechace?
        `,
        answer: ["el presentimiento", "un presentimiento", "presentimiento"],
        script: `
            Seguí trabajando igual. No dije nada. Pensé que quizá estaba cansado y
            sugestionadome. Pero anoche fue distinto.
            Llegué como siempre a las 11:00 pm, A las 2:42 ya estaba nervioso
            esperando. Esta vez la puerta no se abrió. En cambio, escuché algo
            desde el baño de empleados. Un golpeteo, Como si alguien raspara,
            suavemente la puerta desde dentro.
            Ese baño no tiene ventanas. Nadie puede entrar sin pasar, por la tienda.
        `
    },
    {
        riddle: `
            Si estás seguro de estar en un lugar, pero nadie puede probarlo,
            ¿exististe ahí realmente?
        `,
        answer: ["no", "no lo se"],
        script: `
            Tomé valor y me acerqué. Toqué la puerta, solo habia silencio.
            Abrí lentamente, estaba vacío. Pero lo raro no fue eso.
            Lo raro fue que, sobre el espejo empañado había, una frase escrita con un dedo:,
            "Tú también vas a olvidar que estuviste aquí". "Tú también vas a olvidar que estuviste aquí".
            No supe qué hacer. Cerré el local dos horas antes, y me fui.
            Hoy pedí ver las cámaras, de anoche con el supervisor. Quería mostrarle lo del baño.
            Pero en las grabaciones no estoy.
            No aparezco llegando, ni dentro de la tienda, ni saliendo.
            Como si, esa noche nunca hubiera trabajado.
        `
    }
];

let currentIndex = 0;
let currentData = data[currentIndex];
let currentRiddle = currentData["riddle"];
let currentAnswer = currentData["answer"];
let currentScript = currentData["script"];

function sliceSubtitles(text){
    /*script to phrases*/
    const subtitles = document.querySelector(".subtitles");
    subtitles.innerHTML = " ";

    const slices = text.split(/[.,;]/);
    let idx = 0;

    const intervalo = setInterval(() => {
        if (idx < slices.length) {
            subtitles.textContent = slices[idx];
            idx++;
        } else {
            clearInterval(intervalo);
            nextRiddle();
        }

    }, 3000);

}

function storyLine() {
        sliceSubtitles(currentScript.toUpperCase());
}

function nextRiddle() {
    const riddleContainer = document.querySelector(".riddle");
    riddleContainer.innerHTML = "";

    const font = '"Cascadia Mono", sans-serif';//"'Courier New', Courier, monospace"

    const showRiddle = document.createElement("p");
    showRiddle.textContent = currentRiddle;
    showRiddle.style.fontFamily = font;
    riddleContainer.appendChild(showRiddle);

    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "¿Que es?";
    input.style.fontFamily = font;
    riddleContainer.appendChild(input);

    const button = document.createElement("button");
    button.textContent = "Intentar";
    button.classList.add("Try-buttom");
    button.style.fontFamily = font;
    riddleContainer.appendChild(button);

    button.addEventListener("click", ()=> {

        currentAnswer.forEach(option => {
            if (input.value.toLowerCase().trim() === option.toLowerCase().trim()) {
                if (currentIndex < data.length - 1) {
                    currentIndex++;
                    riddleContainer.innerHTML = "";
                    currentData = data[currentIndex];
                    currentScript = currentData["script"];
                    currentAnswer = currentData["answer"];
                    currentRiddle = currentData["riddle"];
                    storyLine();
                } else {
                    const body = document.querySelector("body");
                    body.style.backgroundColor = "#000"
                    body.innerHTML = " ";
                    final();
                }
            }
        });
    });
}

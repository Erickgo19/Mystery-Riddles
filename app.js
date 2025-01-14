function finalImg() {
    const container = document.querySelector("body");
    const img = document.createElement("img");
    img.src = "media/news.png";
    img.setAttribute("id", "finalImg");
    container.appendChild(img)
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
            clearInterval(countDown)
            const videoContainer = document.querySelector(".video-container");
            videoContainer.innerHTML = " ";
            const showVideo = document.createElement("video");
            showVideo.src = "media/Final.mp4";
            showVideo.autoplay = true;
            showVideo.preload = "auto";
            videoContainer.appendChild(showVideo);
            showVideo.addEventListener("ended", () => {
                const body = document.querySelector("body");
                body.style.backgroundColor = "#000";
                body.innerHTML = " ";
                finalImg();
            });
        }

        const alert = document.querySelector("#alert")
        if (leftTime >= 590) {
            alert.style.color = "#fff";
        } else {
            alert.style.color = "#000";
        }
    }

    const countDown = setInterval(updateClock, 1000);
    updateClock();
}

let totalTime = 600;
countdown(totalTime)


const data = [
    {
        riddle: "Though invisible, everyone desires it, Opens doors and minds, always progresses. In books and words, it is hidden, The greatest treasure a human has ever had.",
        answer: "knowledge",
        video: "media/Journal1.mp4"
    },
    {
        riddle: "Knows nothing, yet thinks it knows everything, Blind obstinacy is its loyal companion. When it manifests, chaos will reign, And in the shadow, its dark reign will grow.",
        answer: "ignorance",
        video: "media/Journal2.mp4"
    },
    {
        riddle: "Enters uninvited, leaves doubts as it passes, Breaks bonds, sows fear without end. Never shows itself, but is always felt, An invisible poison, growing in the mind.",
        answer: "distrust",
        video: "media/Journal3.mp4"
    },
    {
        riddle: "End of all, without exception, No one escapes its silent song. Eternal journey, endless mystery, Where everything that had a beginning ends.",
        answer: "death",
        video: "media/Final.mp4"
    }
];

let currentIndex = 0;

function storyLine() {
    const videoContainer = document.querySelector(".video-container");
    videoContainer.innerHTML = " ";

    if (currentIndex === 0) {
        nextRiddle();
    } else if (currentIndex === 1) {
        let video = document.createElement("video");
        video.src = "media/video2.mp4";
        video.autoplay = true;
        video.preload = "auto";
        videoContainer.appendChild(video);
        video.addEventListener("ended", () => {
            nextRiddle();
        });
    } else if (currentIndex === 2) {
        let video = document.createElement("video");
        video.src = "media/video3.mp4";
        video.autoplay = true;
        video.preload = "auto";
        videoContainer.appendChild(video);
        video.addEventListener("ended", () => {
            nextRiddle();
        });
    } else if (currentIndex === 3) {
        nextRiddle();
    }

}

let firstVideo = document.querySelector("#first-video");
firstVideo.addEventListener("ended", () => {
    storyLine();
});

function nextRiddle() {
    const riddleContainer = document.querySelector(".riddle");
    riddleContainer.innerHTML = "";

    const videoContainer = document.querySelector(".video-container");
    videoContainer.innerHTML = "";

    const font = "sans-serif";//"'Courier New', Courier, monospace"

    let currentData = data[currentIndex];
    let riddle = currentData["riddle"];
    let answer = currentData["answer"];
    let video = currentData["video"];

    const showRiddle = document.createElement("p");
    showRiddle.textContent = riddle;
    showRiddle.style.fontFamily = font;
    riddleContainer.appendChild(showRiddle);

    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "What is it?";
    input.style.fontFamily = font;
    riddleContainer.appendChild(input);

    const button = document.createElement("button");
    button.textContent = "try";
    button.style.fontFamily = font;
    riddleContainer.appendChild(button);

    const showVideo = document.createElement("video");
    showVideo.src = video;
    showVideo.style.display = "none";
    showVideo.preload = "auto";
    videoContainer.appendChild(showVideo);

    button.addEventListener("click", ()=> {
        if (input.value.toLowerCase() === answer) {
            riddleContainer.innerHTML = "";
            showVideo.style.display = "block";
            showVideo.autoplay = true;
        }
    });

    showVideo.addEventListener("ended", () => {
        let leftTime = countdown; 
        if (currentIndex <= data.length) {
            currentIndex++;
            if (currentIndex < 3) {
                setTimeout(storyLine, 30000);
            } else if (currentIndex == 3) {
                storyLine()
            } else {
                const body = document.querySelector("body");
                body.style.backgroundColor = "#000"
                body.innerHTML = " ";
                finalImg();
            }
        }
    });
}

let videoContainer = document.querySelector(".video-container");


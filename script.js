const backgrounds = [
    "assets/background/bg1.webp",
    "assets/background/bg2.webp",
    "assets/background/bg3.webp",
    "assets/background/bg4.webp",
    "assets/background/bg5.webp",
    "assets/background/bg6.webp",
    "assets/background/bg7.webp",
    "assets/background/bg8.webp",
    "assets/background/bg9.webp",
    "assets/background/bg10.webp"
];

const directions = [
    "translateX(-100px)",
    "translateX(100px)",
    "translateY(-100px)",
    "translateY(100px)"
];

let index = 0;
const bg = document.getElementById("bg");

function changeBackground() {
    const dir = directions[Math.floor(Math.random() * directions.length)];

    bg.style.opacity = 0;
    bg.style.transform = dir;

    setTimeout(() => {
        bg.style.backgroundImage = `url('${backgrounds[index]}')`;
        bg.style.opacity = 1;
        bg.style.transform = "translate(0,0)";
        index = (index + 1) % backgrounds.length;
    }, 800);
}

// initial
bg.style.backgroundImage = `url('${backgrounds[0]}')`;
bg.style.opacity = 1;

// rotate every 20s
setInterval(changeBackground, 20000);

const btns = document.querySelectorAll("button");
const audios = document.querySelectorAll("audio");
const kits = ["crash", "kick", "snare", "tom"];

for (let i = 0; i < btns.length; i++) {
    btns[i].style.backgroundImage = "url(images/" + kits[i] + ".png)"
    audios[i].src = "audios/" + kits[i] + ".mp3"

    btns[i].addEventListener("click", () => {
        audios[i].play();
        btns[i].style.transform = "scale(.9)"
        setTimeout(() => {
            btns[i].style.transform = "scale(1)"
        }, 100)
    })
    window.addEventListener("keypress", (e) => {
        if (e.key === kits[i].slice(0, 1)) {
            audios[i].play();
            btns[i].style.transform = "scale(.9)"
        }
        setTimeout(() => {
            btns[i].style.transform = "scale(1)"
        }, 100)
    })

}
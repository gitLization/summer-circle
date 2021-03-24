const songEl = document.getElementById("song__info");
const musicOnEl = document.getElementById('headset--on');
const musicOffEl = document.getElementById('headset--off');

const audio = new Audio();
const playlists = [
    { 
        src: "./../audio/long_dream.mp3", 
        artist: "새소년", 
        song: "긴꿈"
    }
];

window.addEventListener('load', function() {
    playlists.map((el) => {
        audio.src = el.src
        songEl.innerHTML = `${el.artist} - ${el.song}`
    })
    audio.play()
    audio.loop = 'true'
})


musicOnEl.addEventListener('click', function() {
    musicOnEl.style.display = 'none'
    musicOffEl.style.display = 'flex'

    audio.pause();
})

musicOffEl.addEventListener('click', function() {
    musicOnEl.style.display = 'flex'
    musicOffEl.style.display = 'none'

    audio.play();
})


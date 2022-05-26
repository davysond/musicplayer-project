let musics = [
    {title:'Me and You ft. IRO', artist:'Alok', src:'musics/Alok - Me and You Feat. IRO (Radio edit).mp3', img:'images/eletronic1.jpg'},
    {title:'FUEGO ft. Bhaskar', artist:'Alok', src:'musics/FUEGO Original Mix.mp3', img:'images/eletronic2.jpg'},
    {title:'Hear Me Now', artist:'Alok', src:'musics/Hear Me Now Official Music Video.mp3', img:'images/eletronic3.jpg'}
];

let music = document.querySelector('audio');
let indexMusic = 0;

let durationMusic = document.querySelector('.end');
let image = document.querySelector('img');
let nameMusic = document.querySelector('.description h2');
let nameArtist = document.querySelector('.description i');

rendexMusic(indexMusic);

// Eventos
document.querySelector('.button-play').addEventListener('click', playMusic);

document.querySelector('.button-pause').addEventListener('click', pauseMusic);

music.addEventListener('timeupdate', updateBar);

document.querySelector('.button-backward').addEventListener('click', () => {
    indexMusic--;
    if (indexMusic < 0) {
        indexMusic = 2;
    }
    rendexMusic(indexMusic);
});

document.querySelector('.button-forward').addEventListener('click', () => {
    indexMusic++;
    if (indexMusic > 2){
        indexMusic = 0;
    }
    rendexMusic(indexMusic);
});

// Funções
function rendexMusic(index){
    music.setAttribute('src', musics[index].src);
    music.addEventListener('loadeddata', () => {
        nameMusic.textContent = musics[index].title;
        nameArtist.textContent = musics[index].artist;
        image.src = musics[index].img;
        durationMusic.textContent = segundosParaMinutos(Math.floor(music.duration));
    });
}

function playMusic(){
    music.play();
    document.querySelector('.button-pause').style.display = 'block';
    document.querySelector('.button-play').style.display = 'none';
}

function pauseMusic(){
    music.pause();
    document.querySelector('.button-pause').style.display = 'none';
    document.querySelector('.button-play').style.display = 'block';
}

function updateBar(){
    let bar = document.querySelector('progress');
    bar.style.width = Math.floor((music.currentTime / music.duration) * 100) + '%';
    let durationMusic = document.querySelector('.start');
    durationMusic.textContent = segundosParaMinutos(Math.floor(music.currentTime));
}

function segundosParaMinutos(segundos){
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if (campoSegundos < 10){
        campoSegundos = '0' + campoSegundos;
    }

    return campoMinutos+':'+campoSegundos;
}
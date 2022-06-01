const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

var song1 = document.getElementById('song1');
var song2 = document.getElementById('song2');
var song3 = document.getElementById('song3');
var song4 = document.getElementById('song4');
var song5 = document.getElementById('song5');
var song6 = document.getElementById('song6');
var song7 = document.getElementById('song7');


var audiosongs = [];
const title = document.getElementById('title');

audiosongs.push(song1);
audiosongs.push(song2);
audiosongs.push(song3);
audiosongs.push(song4);
audiosongs.push(song5);
audiosongs.push(song6);
audiosongs.push(song7);

// Song titles
const songs = ['1. Forest Lullaby', '2. Chill Abstract', '3. The Cradle', '4. Ambient Piano', '5. Just Relax', '6. Mindfulness Relaxation', '7. Sedative'];


// Keep track of song
let songIndex = 0;

// Initially load song details into DOM
loadSong(songs[songIndex]);

// Update song details
function loadSong(song) {
    title.innerHTML = song;

}

// play song
function playSong() {
  musicContainer.classList.add('play');
   playBtn.querySelector('i.fas').classList.remove('fa-play');
   playBtn.querySelector('i.fas').classList.add('fa-pause');
   
   for (let index = 0; index < audiosongs.length; index++) {
    audiosongs[index].pause();  
   }

   audiosongs[songIndex].play();

}

// pause song
function pauseSong() {
    musicContainer.classList.remove('play');
    playBtn.querySelector('i.fas').classList.add('fa-play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');
    audiosongs[songIndex].pause();
}

// previous song
function prevSong() {
    songIndex--;
    if(songIndex < audiosongs.length - 1) {
        songIndex = 0;
    }
    loadSong(songs[songIndex]);
    playSong();
}


// next song
function nextSong() {
    songIndex++;
    if(songIndex > audiosongs.length - 1) {
        songIndex = 0;
    }
    loadSong(songs[songIndex]);
    playSong();
}



// Event listeners
playBtn.addEventListener("click", function(){
    const isPlaying = musicContainer.classList.contains('play');
    if(isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
   
});

//change songs
prevBtn.addEventListener('click', prevSong)
nextBtn.addEventListener('click', nextSong)


// song ends

for (let index = 0; index < audiosongs.length; index++) {
    audiosongs[index].addEventListener('ended', nextSong);  
   }
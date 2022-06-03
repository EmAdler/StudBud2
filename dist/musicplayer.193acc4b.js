//MUSIC PLAYER 
////REFERNCE/////
//V. (n.d.). Simple-Music-player/index.html at gh-pages · vivekdogra02/Simple-Music-player. GitHub. Retrieved June 3, 2022, from https://github.com/vivekdogra02/Simple-Music-player/blob/gh-pages/index.html
//Cloudflare. (n.d.). PixaBay. Retrieved June 3, 2022, from https://pixabay.com/music/search/mood/relaxing/
//Traversy Media. (2021, April 10). Build a Music Player | Vanilla JavaScript [Video]. YouTube. https://www.youtube.com/watch?v=QTHRWGn_sJw
//Call the elements from HTML
const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
//Calling all audio files and providing them a unqiue name 
var song1 = document.getElementById('song1');
var song2 = document.getElementById('song2');
var song3 = document.getElementById('song3');
var song4 = document.getElementById('song4');
var song5 = document.getElementById('song5');
var song6 = document.getElementById('song6');
var song7 = document.getElementById('song7');
//creating an array for the songs
var audiosongs = [];
//calling the title function from HTML
const title = document.getElementById('title');
//pushing all the songs into the 'audiosong' array'
audiosongs.push(song1);
audiosongs.push(song2);
audiosongs.push(song3);
audiosongs.push(song4);
audiosongs.push(song5);
audiosongs.push(song6);
audiosongs.push(song7);
// Array of song titles
const songs = [
    '1. Forest Lullaby',
    '2. Chill Abstract',
    '3. The Cradle',
    '4. Ambient Piano',
    '5. Just Relax',
    '6. Mindfulness Relaxation',
    '7. Sedative'
];
// Keep track of song
let songIndex = 0;
// Initially load song details into DOM
loadSong(songs[songIndex]);
// Update song title depending on what is playing
function loadSong(song) {
    title.innerHTML = song;
}
// PLAY SONG
//switch the play icon to pause once clicked
function playSong() {
    musicContainer.classList.add('play');
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');
    for(let index1 = 0; index1 < audiosongs.length; index1++)audiosongs[index1].pause();
    audiosongs[songIndex].play();
}
// PAUSE SONG
//switch the pause icon to play once clicked
function pauseSong() {
    musicContainer.classList.remove('play');
    playBtn.querySelector('i.fas').classList.add('fa-play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');
    audiosongs[songIndex].pause();
}
// PREVIOUSE SONG
//play the song preivously through calling the song in the position before in the array
function prevSong() {
    songIndex--;
    if (songIndex < audiosongs.length - 1) songIndex = 0;
    loadSong(songs[songIndex]);
    playSong();
}
// NEXT SONG
//play the song after through calling the song in the position after in the array
function nextSong() {
    songIndex++;
    if (songIndex > audiosongs.length - 1) songIndex = 0;
    loadSong(songs[songIndex]);
    playSong();
}
// Event listeners to make the play button function
playBtn.addEventListener("click", function() {
    const isPlaying = musicContainer.classList.contains('play');
    if (isPlaying) pauseSong();
    else playSong();
});
//Change songs on lick 
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
// If the song is played to full length the play the next song
for(let index = 0; index < audiosongs.length; index++)audiosongs[index].addEventListener('ended', nextSong);

//# sourceMappingURL=musicplayer.193acc4b.js.map

$(window).scroll(function () {
    if ($(window).scrollTop() >= 100) {
        if($(window).width() > 631) {
            $('nav').css('height', '60');
            $('.nav-link').css('font-size', '1.35rem');
            $('.nav-link').css('color', 'white');
        }
        $('nav').css('background', 'rgba(0, 0, 0, 0.8)');
        $('.logo').css('transition', '300ms ease-in');
        $('.infinity').css('transition', '300ms ease-in');
        $('.infinity').css('color', 'white');
        $('.bi-spotify').css('transition', '300ms ease-in');
        $('.bi-spotify').css('color', 'white');
    } else {
        $('nav').css('background', 'transparent');
        
        if($(window).width() > 631) {
            $('nav').css('height', '100');
        }
        
        $('.nav-link').css('font-size', '1.4rem');
    }
});

function changeLogo() {
    document.getElementById('infinity').style = "opacity: 1;";
    document.getElementById('logo').style = "width: 100%;";
}

window.onload = setTimeout(changeLogo, 1100);


var banderaNavChico = true;
function navChico() {
    if(banderaNavChico == true) {
      $('nav').css('background', 'rgba(0, 0, 0, 0.8)');
        $('nav').css('height', '250');
        $('.small-link').css('display', 'inline');
        $('.small-link').css('visibility', 'visible');
        // $('.small-link').css('transition', '1.2s ease-in-out');
        $('.small-link').css('opacity', '1');
        banderaNavChico = false;
    } else {
        
        $('nav').css('height', '40');
        // $('.small-link').css('display', 'none');
        $('.small-link').css('visibility', 'hidden');
        $('.small-link').css('opacity', '0');
        banderaNavChico = true;
        triggerHide()
        
        
    }
}

function triggerHide() {
    setTimeout(hideSmallLinks,250);
}


function hideSmallLinks() {
    $('.small-link').css('display', 'none');
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++MEDIA PLAYER

const track = document.getElementById("track");
const thumbnail = document.getElementById("thumbnail");
const background = document.getElementById("background");
const trackArtist = document.getElementById("track-artist");
const trackTitle = document.getElementById("track-title");
const progressBar = document.getElementById("progressBar");
const currentTime = document.getElementById("currentTime");
const durationTime = document.getElementById("durationTime");

let play = document.getElementById("play");
let pause = document.getElementById("pause");
let next = document.getElementById("next-track");
let prev = document.getElementById("prev-track");
trackIndex = 0;

tracks = [
  "images/Humankind.mp3",
  "images/EasyOnMe.mp3",
  "images/Tides.mp3",
  "images/HardToRead.mp3",
];
thumbnails = [
  "images/coldplay.jpg",
  "images/adele.jpg",
  "images/ed-sheeran.jpg",
  "images/day-wave.jpg",
];
trackArtists = ["Coldplay", "Adele", "Ed Sheeran", "Day Wave"];
trackTitles = ["Humankind", "Easy On Me", "Tides", "Hard to read"];

let playing = true;

function pausePlay() {
  if (playing) {
    play.style.display = "none";
    pause.style.display = "block";

    thumbnail.style.transform = "scale(1.10)";

    track.play();
    playing = false;
  } else {
    pause.style.display = "none";
    play.style.display = "block";

    thumbnail.style.transform = "scale(1)";

    track.pause();
    playing = true;
  }
}

play.addEventListener("click", pausePlay);
pause.addEventListener("click", pausePlay);

track.addEventListener("ended", nextTrack);

function nextTrack() {
  trackIndex++;
  if (trackIndex > tracks.length - 1) {
    trackIndex = 0;
  }

  track.src = tracks[trackIndex];
  thumbnail.src = thumbnails[trackIndex];
//   background.src = thumbnails[trackIndex];

if(trackArtists[trackIndex] == "Coldplay") {
    $('.player-container').css('box-shadow', '0 3px 30px #3151de');
    $('#track-artist').css('color', '#3151de');

} else if (trackArtists[trackIndex] == "Adele") {
    $('.player-container').css('box-shadow', '0 3px 35px #518c4f');
    $('#track-artist').css('color', '#57ad6f');

} else if(trackArtists[trackIndex] == "Ed Sheeran") {
    $('.player-container').css('box-shadow', '0 3px 35px #d8173e');
    $('#track-artist').css('color', '#d8173e');

} else if(trackArtists[trackIndex] == "Day Wave") {
    $('.player-container').css('box-shadow', '0 3px 35px #9bd4d3');
    $('#track-artist').css('color', '#678787');
}

  trackArtist.textContent = trackArtists[trackIndex];
  trackTitle.textContent = trackTitles[trackIndex];

  playing = true;
  pausePlay();
}

next.addEventListener("click", nextTrack);

function prevTrack() {
  trackIndex--;
  if (trackIndex < 0) {
    trackIndex = tracks.length - 1;
  }

  track.src = tracks[trackIndex];
  thumbnail.src = thumbnails[trackIndex];
//   background.src = thumbnails[trackIndex];

if(trackArtists[trackIndex] == "Coldplay") {
    $('.player-container').css('box-shadow', '0 3px 50px #3151de');
    $('#track-artist').css('color', '#3151de');

} else if (trackArtists[trackIndex] == "Adele") {
    $('.player-container').css('box-shadow', '0 3px 50px #518c4f');
    $('#track-artist').css('color', '#57ad6f');

} else if(trackArtists[trackIndex] == "Ed Sheeran") {
    $('.player-container').css('box-shadow', '0 3px 50px #d8173e');
    $('#track-artist').css('color', '#d8173e');

} else if(trackArtists[trackIndex] == "Day Wave") {
    $('.player-container').css('box-shadow', '0 3px 50px #9bd4d3');
    $('#track-artist').css('color', '#678787');
}

  trackArtist.textContent = trackArtists[trackIndex];
  trackTitle.textContent = trackTitles[trackIndex];

  playing = true;
  pausePlay();
}

prev.addEventListener("click", prevTrack);

function progressValue() {
  progressBar.max = track.duration;
  progressBar.value = track.currentTime;

  currentTime.textContent = formatTime(track.currentTime);
  durationTime.textContent = formatTime(track.duration);
}

setInterval(progressValue, 500);

function formatTime(sec) {
  let minutes = Math.floor(sec / 60);
  let seconds = Math.floor(sec - minutes * 60);
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  return `${minutes}:${seconds}`;
}

function changeProgressBar() {
  track.currentTime = progressBar.value;
}

progressBar.addEventListener("click", changeProgressBar);




var actionOnce = false;
$(window).scroll(function () {
    var hT = $('#media-desc').offset().top,
        hH = $('#media-desc').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
    if (wS > (hT + hH - wH)) {
        if (actionOnce == false) {
            // $('.about-content').css('left', '100px');
            $('.player-container').css('opacity', '1');
            $('.infinity-desc').css('opacity', '1');
            $('.infinity-desc-separator').css('opacity', '1');
            $('.about-content').css('height', '400');
            $('.vynil').css('opacity', '1');
            $('.vynil-comment').css('opacity', '1');
            actionOnce = true;
        }
    }

})
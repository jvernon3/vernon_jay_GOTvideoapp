(() => {
  console.log('video started');

  // add to the String prototype to capitalize the first letter
  String.prototype.capIt = function() { return this.replace(this.charAt(), this.charAt().toUpperCase()); };

  const sigils = document.querySelectorAll('.sigilContainer'),
        lightbox = document.querySelector('.lightbox'),
        closeLightbox = document.querySelector('.close-lightbox'),
        vidPlayer = document.querySelector('video'),
        vidHouse = document.querySelector('houseName'),
        playPause = document.querySelector('.controls'),
        ffWd = document.querySelector('.forward'),
        rWnd = document.querySelector('.rewind');
        imageBanner = document.querySelector('#houseImages')


  // functions and methods at the top
  function loadMovie() {
    // 1. Turn on Lightbox
    lightbox.classList.add('show-lightbox');


    // 2. grab the right video based on the class name -> the split yields the name
    var house = this.className.split(' ')[1].capIt();

    // 3. Put the path together and make the video load and play
    vidPlayer.src = `video/House-${house}.${vidPlayer.currentSrc.split('.')[1]}`;

    vidPlayer.load();
    vidPlayer.play();

    animateBanners(this.dataset.offset);
  }

  function animateBanners(offset) {
    //console.log(600 * offset); // this should give us the value we need to move the banner appropriately

    // animate the banners across the screen
    imageBanner.style.right = (offset * 600) + "px";
  }

  function closeLBox() {
    lightbox.classList.remove('show-lightbox');
    vidPlayer.pause();
    vidPlayer.currentTime = 0;
  }

  function togglePlay(){
    //debugger;
    var theSVG = this.firstElementChild;
    if(vidPlayer.paused){
    vidPlayer.play();
    theSVG.dataset.icon = "pause-circle";
    }
    else {
    vidPlayer.pause();
    theSVG.dataset.icon = "play-circle";
    }
  }

  function ffWdVid() {
    debugger;
  }

  function rWndVid() {
    debugger;
  }

  // events at the bottom
  sigils.forEach(sigil => sigil.addEventListener('click', loadMovie));
  closeLightbox.addEventListener('click', closeLBox);
  playPause.addEventListener('click', togglePlay);
  vidPlayer.addEventListener('ended', closeLBox);
  ffWd.addEventListener('click', ffWdVid);
  rWnd.addEventListener('click', rWndVid);
})();

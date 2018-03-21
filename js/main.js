(() => {
  console.log('video started');

  const vidPlayer = document.querySelector('video'),
        playButton = document.querySelectorAll('button')[0],
        pauseButton = document.querySelectorAll('button')[1];
        rewindButton = document.querySelectorAll('button')[2];

  function volOn() {
    vidPlayer.muted = false;
  }

  function volOff() {
    vidPlayer.muted = true;
  }

  function rewindVid() {
    vidPlayer.currentTime -= 5;
  }

  function playVideo() {
    vidPlayer.play();
  }

  function pauseVideo() {
    vidPlayer.pause();
  }

  vidPlayer.addEventListener('mouseover', volOn);
  vidPlayer.addEventListener('mouseout', volOff);
  playButton.addEventListener('click', playVideo);
  pauseButton.addEventListener('click', pauseVideo);
  rewindButton.addEventListener('click', rewindVid);

})();

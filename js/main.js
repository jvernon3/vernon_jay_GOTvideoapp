(() => {
  console.log('video started');

  // add to the String prototype to capitalize the first letter
  String.prototype.capIt = function() { return this.replace(this.charAt(), this.charAt().toUpperCase()); };

  const sigils = document.querySelectorAll('.sigilContainer'),
        lightbox = document.querySelector('.lightbox'),
        closeLightbox = document.querySelector('.close-lightbox'),
        vidPlayer = document.querySelector('video');


  // functions and methods at the top
  function loadMovie() {
    // 1. Turn on Lightbox
    lightbox.classList.add('show-lightbox');


    // 2. grab the right video based on the class name -> the split yields the name
    var house = this.className.split(' ')[1].capIt();

    vidPlayer.play();
  }

  function closeLBox() {
    lightbox.classList.remove('show-lightbox');
    vidPlayer.pause();
    vidPlayer.currentTime = 0;
  }

  // events at the bottom
  sigils.forEach(sigil => sigil.addEventListener('click', loadMovie));
  closeLightbox.addEventListener('click', closeLBox);
})();

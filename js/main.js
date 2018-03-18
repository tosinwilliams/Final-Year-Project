//Start Experience
window.onload = function () {
    var startExperienceBtn = document.getElementById('start_experience');
    startExperienceBtn.onclick = function () {
        document.getElementById('container').outerHTML = '';
        document.getElementsByTagName('a-scene')[0].style.zIndex = 'auto';
    };
};

// Component to change to a sequential image on click.
AFRAME.registerComponent('cursor-listener', {
  init: function () {
    var lastIndex = -1;
    var IMAGES = ['images/art1.jpg','images/art2.jpg','images/art3.jpg','images/art4.jpg','images/art5.jpg',];
    this.el.addEventListener('click', function (evt) {
      lastIndex = (lastIndex + 1) % IMAGES.length;
      this.setAttribute('material', 'src', IMAGES[lastIndex]);
      console.log('I was clicked at: ', evt.detail.intersection.point);
    });
  }
});

//// Component to activate spaceship animation on click
//AFRAME.registerComponent('cursor-animator', {
//  init: function () {
//    this.el.addEventListener('click', function (evt) {
//        //Code
//      console.log('I was clicked at: ', evt.detail.intersection.point);
//    });
//  }
//});

    AFRAME.registerComponent('cursor-animator', {
      init: function () {
        this.el.addEventListener('click', function (evt) {
          console.log('click')
        });
      }
    });

//Component to automatically persist in vr
AFRAME.registerComponent('auto-enter-vr', {
  init: function () {
    this.el.sceneEl.enterVR();
  }
});
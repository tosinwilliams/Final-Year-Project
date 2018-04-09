// Component to change to a sequential image on click.
AFRAME.registerComponent('cursor-listener', {
    init: function () {
        var lastIndex = -1;
        var IMAGES = ['images/art1.jpg', 'images/art2.jpg', 'images/art3.jpg', 'images/art4.jpg', 'images/art5.jpg'];
        this.el.addEventListener('click', function (evt) {
            lastIndex = (lastIndex + 1) % IMAGES.length;
            this.setAttribute('material', 'src', IMAGES[lastIndex]);
            console.log('I was clicked at: ', evt.detail.intersection.point);
        });
    }
});

//Component to automatically persist in vr
AFRAME.registerComponent('auto-enter-vr', {
    init: function () {
        this.el.sceneEl.enterVR();
    }
});


AFRAME.registerComponent('raycaster-autorefresh', {
    init: function () {
        var el = this.el;
        this.el.addEventListener('model-loaded', function () {
            var cursorEl = el.querySelector('[raycaster]');
            cursorEl.components.raycaster.refreshObjects();
        });
    }
});
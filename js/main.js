//Start Experience
window.onload = function () {
    var startExperienceBtn = document.getElementById('start_experience');
    startExperienceBtn.onclick = function () {
        document.getElementById('container').outerHTML = '';
        document.getElementsByTagName('a-scene')[0].style.zIndex = 'auto';
    };
};



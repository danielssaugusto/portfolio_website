document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('theme-toggle');
    const body = document.body;

    toggleButton.addEventListener('click', function() {
        body.classList.toggle('light-mode');
        if (body.classList.contains('light-mode')) {
            toggleButton.textContent = '☀️';
        } else {
            toggleButton.textContent = '🌙';
        }
    });
    var video = document.getElementById('background-video');
    video.playbackRate = 0.8;
});

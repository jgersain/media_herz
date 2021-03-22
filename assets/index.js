const video = document.querySelector('video');
const button = document.querySelector('button');

function MediaPlayer(config) {
  this.media = config.el;
}

MediaPlayer.prototype.play = function () {
  video.play();
};

MediaPlayer.prototype.pause = function () {
  video.pause();
};

MediaPlayer.prototype.paused = video.paused;

const player = new MediaPlayer({
  el: video,
});

button.onclick = () => (video.paused ? player.play() : player.pause());

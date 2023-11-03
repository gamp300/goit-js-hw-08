import Player from '@vimeo/player';

const player = new Player('handstick', {
  id: 19231868,
  width: 640,
});

player.on('play', function () {
  console.log('played the video!');
});

const storedTime = localStorage.getItem('videoplayer-current-time');
if (storedTime) {
  player.setCurrentTime(storedTime);
}

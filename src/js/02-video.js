import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Vimeo(iframe);

player.on(
  'timeupdate',
  throttle(function (data) {
    const currentTime = data.seconds;
    localStorage.setItem('videoplayer-current-time', currentTime);
  }, 1000)
);

document.addEventListener('DOMContentLoaded', function () {
  const currentTime =
    parseFloat(localStorage.getItem('videoplayer-current-time')) || 0;
  player.setCurrentTime(currentTime);
});

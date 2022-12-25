import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

    const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

    player.on('play', function() {
        console.log('played the video!');
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });

player.on('timeupdate', throttle(function(currentTime) {
    const seconds = currentTime.seconds;
    localStorage.setItem("videoplayer-current-time", JSON.stringify(seconds));
}, 1000));

const time = localStorage.getItem("videoplayer-current-time");
const time1 = JSON.parse(time);
player.setCurrentTime(time1);
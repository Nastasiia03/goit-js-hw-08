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

try {
    const time = localStorage.getItem("videoplayer-current-time");
    if (time === null) {
        return undefined;
    } else {
        const time1 = JSON.parse(time);
        player.setCurrentTime(time1);
    };
} catch (error) {
console.error("Get state error", error.message);
    };
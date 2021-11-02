import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

 
const onPlay = function(data) {
 localStorage.setItem('videoplayer-current-time', JSON.stringify(data)); 

};
player.on('timeupdate', throttle(onPlay, 1000));

const currentTime = JSON.parse(localStorage.getItem('videoplayer-current-time'));
console.log(currentTime);
player.setCurrentTime(currentTime.seconds).then(function(seconds) {

}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});
// const callback = function() {
//  localStorage.removeItem('videoplayer-current-time');
// };
// player.off('timeupdate', callback);  
 localStorage.removeItem('videoplayer-current-time');